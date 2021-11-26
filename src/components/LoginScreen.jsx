import React, {useEffect, useRef, useState} from "react";


export let LoginScreen = () => {
    return (
    <div class="lg:flex">
        <div class="lg:w-1/2 xl:max-w-screen-sm">
            <div class="py-12 bg-indigo-800 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div class="cursor-pointer flex items-center">
                    <div class="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">Cipher Control Panel</div>
                </div>
            </div>
            <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                <div class="mt-12">
                    <form>
                        <div>
                            <div class="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                            <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="mike@gmail.com"></input>
                        </div>
                        <div class="mt-8">
                            <div class="flex justify-between items-center">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </div>
                                <div>
                                    <a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password"></input>
                        </div>
                        <div class="mt-10">
                            <button class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                Log In
                            </button>
                        </div>
                    </form>
                    <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Don't have an account ? <a class="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:flex items-center justify-center bg-black flex-1 h-screen">

                <Canvas orthographic camera={{ zoom: 100 }}>
                    <fog near={1} far={15} attach="fog" color="#2897c7" />
                    <Scene />
                    <OrbitControls autoRotate={true} />
                </Canvas>
        </div>
    </div>)
}


import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Object3D, OctahedronGeometry } from 'three'
import { OrbitControls } from '@react-three/drei'

// adapted from https://gist.github.com/stephanbogner/a5f50548a06bec723dcb0991dcbb0856 by https://twitter.com/st_phan
function getFibonacciSpherePoints(samples = 1, radius = 1, randomize = true) {
    var random = 1
    if (randomize === true) {
        random = Math.random() * samples
    }

    const points = []
    const offset = 2 / samples
    const increment = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < samples; i++) {
        let y = i * offset - 1 + offset / 2
        const distance = Math.sqrt(1 - Math.pow(y, 2))
        const phi = ((i + random) % samples) * increment
        let x = Math.cos(phi) * distance
        let z = Math.sin(phi) * distance
        x = x * radius
        y = y * radius
        z = z * radius

        const point = {
            x: x,
            y: y,
            z: z
        }
        points.push(point)
    }
    return points
}

function Thing({ fibonacci, radius = 4 }) {
    const instance = useRef()

    const [objects] = useState(() => {
        let points = null

        if (fibonacci) {
            const n = 786 // same as 13 detail octa
            const _points = getFibonacciSpherePoints(n, radius)

            points = [...new Array(n)].map((_, i) => {
                const o = new Object3D()

                o.position.set(_points[i].x, _points[i].y, _points[i].z)

                return o
            })
        } else {
            const sphere = new OctahedronGeometry(radius, 13)
            const n = sphere.vertices.length

            points = [...new Array(n)].map(() => new Object3D())

            points.forEach((point, i) => {
                point.position.copy(sphere.vertices[i])
            })
        }

        return points
    })

    useEffect(() => {
        let id = 0
        for (let i = 0; i < objects.length; i++) {
            objects[id].updateMatrix()
            instance.current.setMatrixAt(id, objects[id++].matrix)
        }
        instance.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={instance} args={[null, null, objects.length]}>
            <icosahedronGeometry args={[0.05, 4]} />
            <meshBasicMaterial color="#000000" />
        </instancedMesh>
    )
}

function Scene() {
    return <Thing fibonacci={true} key={true} />
}

