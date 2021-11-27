import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBarContents } from "./components/Constants/SideBarContents";
import ListOfUsers from "./components/ListOfUsers";
import DefCodePath from "./components/DefCodePath";
import {LoginScreen} from "./components/LoginScreen";
import Chart from './components/Chart';
import Chart02 from './components/Chart02';
import StatsSection from './components/StatsSection';
import {WidgetGridBox} from "./components/Widgets";

function MainScreen() {
  const [Toggle, setToggle] = useState(false);
  const [bannerOpen, setbannerOpen] = useState(true);
  const Cards = [
   
    {
      parameters: {

      },
      Component: Chart
    },
    {
      parameters: {

      },
      Component: Chart02
    },
     {
      parameters: {

      },
      Component: ListOfUsers
    },
     {
      parameters: {

      },
      Component: StatsSection
    },
  ]
  return (<div >
  <DefCodePath
      Components={Cards}
      Toggle={Toggle}
      setToggle={setToggle}
      bannerOpen={bannerOpen}
      setbannerOpen={setbannerOpen}
      sidebarContents={SideBarContents}
      grid_system={true}
    />
  </div>)
}

const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainScreen/>} />
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/widgets" element={<WidgetGridBox/>}/>
        </Routes>
      </BrowserRouter>
  )
};

export default App;
