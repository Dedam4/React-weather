import React from 'react';
import {BrowserRouter,Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/home/Home';
import { Statistics } from './pages/Statistics/Statistics';
import { Header } from './shared/header/header';
import {Popup} from './shared/Popup/Popup'





function App() {
  return (
    <div className = 'global-container'>
      <Popup/>
    <div className="container">
     <Header/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/statistics'   element = {<Statistics/>}/>
        </Routes>
     

    </div>
    </div>
  );
}

export default App;
