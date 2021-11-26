// import { motion } from "framer-motion"
import Button from "@material-tailwind/react/Button";
import React, { useState } from 'react'
import { SideBarContents } from './Components/Constants/SideBarContents';
import DefCodePath from './Components/DefCodePath';
import HeaderBanner from './Components/HeaderBanner'
import Structure from './Components/Structure'

function App() {
  const [Toggle, setToggle] = useState(false);
  const [bannerOpen, setbannerOpen] = useState(true);

  return (<div >
    <DefCodePath
      Toggle={Toggle}
      setToggle={setToggle}
      bannerOpen={bannerOpen}
      setbannerOpen={setbannerOpen}
      sidebarContents={SideBarContents}
      
    />
  </div>)
}

export default App
