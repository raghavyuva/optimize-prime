import React from 'react'
import HeaderBanner from './HeaderBanner'
import { Navbar } from './Navbar'
import Structure from './Structure'

function DefCodePath({
    bannerOpen,
    setbannerOpen,
    Toggle,
    setToggle,
    sidebarContents,
    Components,
    grid_system
}) {
    return (
        <div>
            {bannerOpen &&
                <HeaderBanner
                    bannerOpen={bannerOpen}
                    setbannerOpen={setbannerOpen}
                />
            }
            <Structure Toggle={Toggle}
                setToggle={setToggle}
                sidebarContents={sidebarContents}
                Components={Components}
                grid_system={grid_system}
            />
        </div>
    )
}

export default DefCodePath
