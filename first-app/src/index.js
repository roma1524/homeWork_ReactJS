import React from 'react';
import ReactDOM from 'react-dom/client';

import {ThemeProvider, createTheme} from '@mui/material';
import {ProfilePage, ChatPage} from './pages'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {Header} from "./components";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  myPalette: {
    color: "pink",
  },
  palette: {},
});


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/chat/*" element={<ChatPage/>}/>
            <Route path="/" element={<h1>Hello world</h1>}/>
            <Route path="*" element={<h1>404</h1>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
