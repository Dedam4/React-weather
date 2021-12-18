import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import  './pages/home/Home';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from './provaider/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   <ThemeProvider><App /></ThemeProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


