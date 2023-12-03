import React,{ useState } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar'


function App() {
  const [open, setOpen] = useState(false);
  
  
  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }
  const handleClose = () =>{
    setOpen(false);
    document.body.style.overflow = "unset";
  }
  
  
  return (
    <div className="App">
      <Header onOpenMenu={handleOpen}/>
      <NavBar show={open} onClose={handleClose}/>
      <Outlet />
    </div>
  );
}

export default App;
