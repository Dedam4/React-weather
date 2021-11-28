import React from 'react';
import {BrowserRouter,Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/home/Home';
import { Statistics } from './pages/Statistics/Statistics';
import { Header } from './shared/header/header';



function App() {
  return (
    <div className="container">
     <Header/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/statistics'   element = {<Statistics/>}/>
        </Routes>
     

    </div>
  );
}

export default App;
