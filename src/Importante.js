import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Importante = () => {
    const styleImportante = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        bgcolor: 'background.paper',
        p: 4,
      };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
    <Navbar toggle={toggle} isOpen={isOpen}/>
    <Sidebar isOpen={isOpen} toggle={toggle} /> 
    
    <Box sx={styleImportante}>
    <Typography id="modal-modal-title" variant="button" component="h2">
      Importante para considerar al usar el sistema 
    </Typography>
    <Typography sx={{ mt: 2 }} variant="subtitle1">
          <ul>
          <li>El sistema detecta planillas Excel de una sola hoja.</li>
          <li>"/&\\\#+$~%':*?{} son caracteres restringidos en algunas columnas.</li>
          <li>Las columnas numericas seran limpiadas de caracteres.</li>
          </ul>
    
        </Typography>
        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
     
      </Typography>
  </Box>
      

    </>
  )
}

export default Importante