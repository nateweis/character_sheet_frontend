import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'; //Routes replaced Switch, Navigate replaced Redirect in the react-router update

import Login from './Views/LoginPg/Login';
import Sidebar from './Views/Sidebar/Sidebar';
import Home from './Views/HomePg/Home';
import Items from './Views/ItemsPg/Items';

import Auth from './models/Auth'

function App(){

  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={Auth.getToken() ? <Navigate to="/character/home" /> : <Login />} />
          <Route path="character" element={Auth.getToken() ? <Sidebar /> : <Navigate to="/" />}>
             <Route path="home" element={<Home />} />
             <Route path="items" element={<Items />} />
          </Route>

          <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
