import React from 'react'
import HeaderBanner from './HeaderBanner'
import { Navbar } from './Navbar'
import Structure from './Structure'

function DefCodePath({
    bannerOpen,
    setbannerOpen,
    Toggle,
    setToggle,
    sidebarContents
}) {
    return (
        <div>
            {bannerOpen &&
                <HeaderBanner
                    bannerOpen={bannerOpen}
                    setbannerOpen={setbannerOpen}
                />
            }
            <Navbar />
            <Structure Toggle={Toggle}
                setToggle={setToggle}
                sidebarContents={sidebarContents}
            />
        </div>
    )
}

export default DefCodePath
