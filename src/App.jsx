import React, { useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SideBarContents} from "./components/Constants/SideBarContents";
import ListOfUsers from "./components/ListOfUsers";
import DefCodePath from "./components/DefCodePath";
import {LoginScreen} from "./components/LoginScreen";


function MainScreen() {
  const [Toggle, setToggle] = useState(false);
  const [bannerOpen, setbannerOpen] = useState(true);
  const Cards = [
    {
      parameters: {

      },
      Component: ListOfUsers
    },

  ]
  return (<div >
    <DefCodePath
        Toggle={Toggle}
        setToggle={setToggle}
        bannerOpen={bannerOpen}
        setbannerOpen={setbannerOpen}
        sidebarContents={SideBarContents}
        Components={Cards}
    />
  </div>)
}

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainScreen/>} />
          <Route exact path="/login" element={<LoginScreen/>}/>
        </Routes>
      </BrowserRouter>
  )
};

export default App;
