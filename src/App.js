import React,{ useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar'

import Home from './pages/Home/Home'

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
      <Home />
    </div>
  );
}

export default App;
