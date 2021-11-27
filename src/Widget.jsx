import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBarContents } from "./components/Constants/SideBarContents";
import ListOfUsers from "./components/ListOfUsers";
import DefCodePath from "./components/DefCodePath";
import { LoginScreen } from "./components/LoginScreen";
import Home from './components/Landing/Home';
import Chart from './components/Chart';
import Chart02 from './components/Chart02';
import StatsSection from './components/StatsSection';
import { WidgetGridBox } from './components/Widgets';


function Widget() {
  const [Toggle, setToggle] = useState(false);
  const [bannerOpen, setbannerOpen] = useState(true);
  const Cards = [

    {
      parameters: {

      },
      Component: WidgetGridBox
    },
  ]
  return (<div >
    {
        <DefCodePath
          Components={Cards}
          Toggle={Toggle}
          setToggle={setToggle}
          bannerOpen={bannerOpen}
          setbannerOpen={setbannerOpen}
          sidebarContents={SideBarContents}
          grid_system={true}
        />
    }
  </div>)
}

export default Widget