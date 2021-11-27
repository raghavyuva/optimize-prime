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
import Widget from './Widget';


function MainScreen() {
  const [Toggle, setToggle] = useState(false);
  const [bannerOpen, setbannerOpen] = useState(true);
  const [loggedin, setloggedin] = useState(false)
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

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<MainScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/widgets" element={<Widget />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
