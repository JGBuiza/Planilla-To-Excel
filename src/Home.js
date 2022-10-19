import React, { useState } from 'react'
import Excel from './components/Excel'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Home = () => {
  const [data, setData] = useState()
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
    <Navbar toggle={toggle} isOpen={isOpen}/>
    <Sidebar isOpen={isOpen} toggle={toggle} /> 
    
      
      
      <Excel setOpen={setOpen}  open={open}  data={data} setData={setData}  />
      

    </>
  )
}

export default Home