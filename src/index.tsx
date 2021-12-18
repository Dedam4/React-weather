import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import  './pages/home/Home';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from './provaider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store/Store';

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
   <ThemeProvider><App /></ThemeProvider> 
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


