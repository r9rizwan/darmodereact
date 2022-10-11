import * as React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home/Home";
import Footer from "./Home/Footer/Footer";
import LeftDrawer from "./Home/Drawer/LeftDrawer";
import Header from "./Home/Header/Header";
import MyAccount from "./Home/user/MyAccount";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Home/user/Dashboard";
import Grid from '@mui/material/Grid';





const App=()=>{

  return (

<BrowserRouter>
<Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/drawer" element={<LeftDrawer/>}/>
   <Route path="/user" element={<MyAccount/>}/>
   <Route path="/dashboard" element={<Dashboard/>}/>
   
      
   </Routes>

<Footer/>
</BrowserRouter>

  )
}

export default App;
