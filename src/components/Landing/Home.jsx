import React from 'react'
import Particles from "react-tsparticles";
import { Navbar } from '../Navbar';
import Globe from './assets/world.svg'
import Features from './Features';
import Footer from './Footer';
import { Typewriter } from 'react-simple-typewriter'
import Pricing from './Pricing';
import Team from '../Team';
import Blog from '../Blog';
import Content from '../Content';
import {  Link } from "react-router-dom";
function Home({
    loggedin,
    setloggedin
}) {

    // const handleType = (count) => {
    //     // access word count number
    //     console.log(count)}
    //   }

    //   const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    //   }

    return (
        <div className=''>
            <Navbar />
            <div class="flex  flex-row justify-center items-center bg-gray-900">
                <div class="text-center sm:flex items-center mt-10   ">
                    <div className='flex flex-col text-gray-50 text-2xl'>
                        {/* <span className='text-5xl font-extrabold text-gray-50'>
                            Domain,Dns ,Cipher
                        </span> */}
                        <Typewriter
                            words={['Dns', 'Domain', 'Control', 'Cipher!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                        <span className='font-sans text-gray-100 my-2'>
                            Our Control Panel works on all Ways,
                            <br />
                            so you only have to set it up once, and get beautiful results forever.
                        </span>
                        <btn
                            className='btn btn-primary  w-48 self-center my-2  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-700'
                        onClick={()=>{}}
                        >
                                <Link to="/login">Get Started</Link>
                            
                        </btn>
                    </div>
                    <div>
                        <img src={Globe} alt="" className=' w-80 h-80 ' />
                    </div>
                </div>
            </div>
            <Particles
                id="tsparticles"
                options={

                    {
                        "autoPlay": true,
                        "background": {
                            "color": {
                                "value": "gray"
                            },
                            "image": "./world.svg",
                            "position": "50% 50%",
                            "repeat": "no-repeat",
                            "size": "cover",
                            "opacity": 1
                        },
                        "backgroundMask": {
                            "composite": "destination-out",
                            "cover": {
                                "color": {
                                    "value": "gray"
                                },
                                "opacity": 1
                            },
                            "enable": false
                        },
                        "fullScreen": {
                            "enable": true,
                            "zIndex": 1
                        },
                        "detectRetina": true,
                        "duration": 0,
                        "fpsLimit": 60,
                        "interactivity": {
                            "detectsOn": "window",
                            "events": {
                                "onClick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "onDiv": {
                                    "selectors": [],
                                    "enable": false,
                                    "mode": [],
                                    "type": "circle"
                                },
                                "onHover": {
                                    "enable": true,
                                    "mode": "repulse",
                                    "parallax": {
                                        "enable": false,
                                        "force": 60,
                                        "smooth": 10
                                    }
                                },
                                "resize": true
                            },
                            "modes": {
                                "attract": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "easing": "ease-out-quad",
                                    "factor": 1,
                                    "maxSpeed": 50,
                                    "speed": 1
                                },
                                "bounce": {
                                    "distance": 200
                                },
                                "bubble": {
                                    "distance": 400,
                                    "duration": 2,
                                    "mix": false,
                                    "opacity": 0.8,
                                    "size": 40
                                },
                                "connect": {
                                    "distance": 80,
                                    "links": {
                                        "opacity": 0.5
                                    },
                                    "radius": 60
                                },
                                "grab": {
                                    "distance": 400,
                                    "links": {
                                        "blink": false,
                                        "consent": false,
                                        "opacity": 1
                                    }
                                },
                                "light": {
                                    "area": {
                                        "gradient": {
                                            "start": {
                                                "value": "gray"
                                            },
                                            "stop": {
                                                "value": "#000000"
                                            }
                                        },
                                        "radius": 1000
                                    },
                                    "shadow": {
                                        "color": {
                                            "value": "#000000"
                                        },
                                        "length": 2000
                                    }
                                },
                                "push": {
                                    "default": true,
                                    "groups": [],
                                    "quantity": 4
                                },
                                "remove": {
                                    "quantity": 2
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "factor": 100,
                                    "speed": 1,
                                    "maxSpeed": 50,
                                    "easing": "ease-out-quad"
                                },
                                "slow": {
                                    "factor": 3,
                                    "radius": 200
                                },
                                "trail": {
                                    "delay": 1,
                                    "pauseOnStop": false,
                                    "quantity": 1
                                }
                            }
                        },
                        "manualParticles": [],
                        "motion": {
                            "disable": false,
                            "reduce": {
                                "factor": 4,
                                "value": true
                            }
                        },
                        "particles": {
                            "bounce": {
                                "horizontal": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                },
                                "vertical": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                }
                            },
                            "collisions": {
                                "bounce": {
                                    "horizontal": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.1
                                        },
                                        "value": 1
                                    },
                                    "vertical": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.1
                                        },
                                        "value": 1
                                    }
                                },
                                "enable": false,
                                "mode": "bounce",
                                "overlap": {
                                    "enable": true,
                                    "retries": 0
                                }
                            },
                            "color": {
                                "value": "#ffffff",
                                "animation": {
                                    "h": {
                                        "count": 0,
                                        "enable": false,
                                        "offset": 0,
                                        "speed": 1,
                                        "sync": true
                                    },
                                    "s": {
                                        "count": 0,
                                        "enable": false,
                                        "offset": 0,
                                        "speed": 1,
                                        "sync": true
                                    },
                                    "l": {
                                        "count": 0,
                                        "enable": false,
                                        "offset": 0,
                                        "speed": 1,
                                        "sync": true
                                    }
                                }
                            },
                            "destroy": {
                                "mode": "none",
                                "split": {
                                    "count": 1,
                                    "factor": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": 3
                                    },
                                    "rate": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": {
                                            "min": 4,
                                            "max": 9
                                        }
                                    },
                                    "sizeOffset": true
                                }
                            },
                            "gradient": [],
                            "groups": {},
                            "life": {
                                "count": 0,
                                "delay": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0,
                                    "sync": false
                                },
                                "duration": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.0001
                                    },
                                    "value": 0,
                                    "sync": false
                                }
                            },
                            "links": {
                                "blink": false,
                                "color": {
                                    "value": "#ffffff"
                                },
                                "consent": false,
                                "distance": 150,
                                "enable": true,
                                "frequency": 1,
                                "opacity": 0.4,
                                "shadow": {
                                    "blur": 5,
                                    "color": {
                                        "value": "#00ff00"
                                    },
                                    "enable": false
                                },
                                "triangles": {
                                    "enable": false,
                                    "frequency": 1
                                },
                                "width": 1,
                                "warp": false
                            },
                            "move": {
                                "angle": {
                                    "offset": 0,
                                    "value": 90
                                },
                                "attract": {
                                    "distance": 200,
                                    "enable": false,
                                    "rotate": {
                                        "x": 600,
                                        "y": 1200
                                    }
                                },
                                "decay": 0,
                                "distance": {},
                                "direction": "none",
                                "drift": 0,
                                "enable": true,
                                "gravity": {
                                    "acceleration": 9.81,
                                    "enable": false,
                                    "inverse": false,
                                    "maxSpeed": 50
                                },
                                "path": {
                                    "clamp": true,
                                    "delay": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": 0
                                    },
                                    "enable": false,
                                    "options": {}
                                },
                                "outModes": {
                                    "default": "out",
                                    "bottom": "out",
                                    "left": "out",
                                    "right": "out",
                                    "top": "out"
                                },
                                "random": false,
                                "size": false,
                                "speed": 2,
                                "spin": {
                                    "acceleration": 0,
                                    "enable": false
                                },
                                "straight": false,
                                "trail": {
                                    "enable": false,
                                    "length": 10,
                                    "fillColor": {
                                        "value": "#000000"
                                    }
                                },
                                "vibrate": false,
                                "warp": false
                            },
                            "number": {
                                "density": {
                                    "enable": true,
                                    "area": 800,
                                    "factor": 1000
                                },
                                "limit": 0,
                                "value": 80
                            },
                            "opacity": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": {
                                    "min": 0.1,
                                    "max": 0.5
                                },
                                "animation": {
                                    "count": 0,
                                    "enable": true,
                                    "speed": 1,
                                    "sync": false,
                                    "destroy": "none",
                                    "startValue": "random",
                                    "minimumValue": 0.1
                                }
                            },
                            "orbit": {
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 1,
                                    "sync": false
                                },
                                "enable": false,
                                "opacity": 1,
                                "rotation": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 45
                                },
                                "width": 1
                            },
                            "reduceDuplicates": false,
                            "repulse": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "enabled": false,
                                "distance": 1,
                                "duration": 1,
                                "factor": 1,
                                "speed": 1
                            },
                            "roll": {
                                "darken": {
                                    "enable": false,
                                    "value": 0
                                },
                                "enable": false,
                                "enlighten": {
                                    "enable": false,
                                    "value": 0
                                },
                                "mode": "vertical",
                                "speed": 25
                            },
                            "rotate": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "animation": {
                                    "enable": false,
                                    "speed": 0,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "path": false
                            },
                            "shadow": {
                                "blur": 0,
                                "color": {
                                    "value": "#000000"
                                },
                                "enable": false,
                                "offset": {
                                    "x": 0,
                                    "y": 0
                                }
                            },
                            "shape": {
                                "options": {
                                    "character": {
                                        "value": [
                                            "t",
                                            "s",
                                            "P",
                                            "a",
                                            "r",
                                            "t",
                                            "i",
                                            "c",
                                            "l",
                                            "e",
                                            "s"
                                        ],
                                        "font": "Verdana",
                                        "style": "",
                                        "weight": "400",
                                        "fill": true
                                    },
                                    "char": {
                                        "value": [
                                            "t",
                                            "s",
                                            "P",
                                            "a",
                                            "r",
                                            "t",
                                            "i",
                                            "c",
                                            "l",
                                            "e",
                                            "s"
                                        ],
                                        "font": "Verdana",
                                        "style": "",
                                        "weight": "400",
                                        "fill": true
                                    }
                                },
                                "type": "char"
                            },
                            "size": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 1
                                },
                                "value": 16,
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 10,
                                    "sync": false,
                                    "destroy": "none",
                                    "startValue": "random",
                                    "minimumValue": 10
                                }
                            },
                            "stroke": {
                                "width": 1,
                                "color": {
                                    "value": "#ffffff",
                                    "animation": {
                                        "h": {
                                            "count": 0,
                                            "enable": false,
                                            "offset": 0,
                                            "speed": 1,
                                            "sync": true
                                        },
                                        "s": {
                                            "count": 0,
                                            "enable": false,
                                            "offset": 0,
                                            "speed": 1,
                                            "sync": true
                                        },
                                        "l": {
                                            "count": 0,
                                            "enable": false,
                                            "offset": 0,
                                            "speed": 1,
                                            "sync": true
                                        }
                                    }
                                }
                            },
                            "tilt": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "animation": {
                                    "enable": false,
                                    "speed": 0,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "enable": false
                            },
                            "twinkle": {
                                "lines": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                },
                                "particles": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                }
                            },
                            "wobble": {
                                "distance": 5,
                                "enable": false,
                                "speed": 50
                            },
                            "zIndex": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "opacityRate": 1,
                                "sizeRate": 1,
                                "velocityRate": 1
                            }
                        },
                        "pauseOnBlur": true,
                        "pauseOnOutsideViewport": true,
                        "responsive": [],
                        "themes": [],
                        "zLayers": 100
                    }}
            />
            <Features />
            <Team />
            <Content />
            <Blog />
            <Pricing />
            <Footer />
        </div>
    )
}

export default Home
