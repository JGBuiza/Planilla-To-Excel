import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Clientes = () => {
    const styleImportante = {
        position: 'absolute',
        top: '30%',
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
  const [cliente, setCliente] = useState('');

  const handleChange = (event) => {
    setCliente(event.target.value);
  };

  const renderSwitch = (param) =>{
    switch(param) {
      case 1:
        return 'Tiene carro de compras y carro cotizador, no tiene regla de impuestos activa por lo que los precios en planilla siempre se cargan con IVA.';
      case 2:
        return 'Tiene carro cotizador, no tiene regla de impuestos activa por lo que los precios en planilla siempre se cargan con IVA.';
      case 3:
        return 'Tiene carro de compras, tiene regla de impuestos activa bajo el ID 1, los precios en planilla se cargan sin IVA (PRECIO NETO) y con la columna ID IMPUESTOS.';
      case 4:
        return 'Tiene carro de compras, tiene regla de impuestos activa bajo el ID 1, los precios en planilla se cargan sin IVA (PRECIO NETO) y con la columna ID IMPUESTOS.';
      case 5:
        return 'Tiene carro cotizador, no tiene regla de impuestos activa por lo que los precios en planilla siempre se cargan con IVA.';
      case 6:
        return 'Tiene carro de compras, tiene regla de impuestos activa bajo el ID 3, los precios en planilla se cargan sin IVA (PRECIO NETO) y con la columna ID IMPUESTOS.';
      case 7:
        return 'Tiene carro de compras y carro cotizador, tiene regla de impuestos activa bajo el ID 4, los precios en planilla se cargan sin IVA (PRECIO NETO) y con la columna ID IMPUESTOS.';
      case 8:
        return 'Cotizador';
      case 9:
        return 'Carro y Cotizador';
      case 10:
        return 'Cotizador';
      case 11:
        return '';
      case 12:
        return 'Cotizador';
      case 13:
        return 'Carro y Cotizador';
      case 14:
        return 'Carro';
      case 15:
        return 'Carro';
      case 16:
        return 'Cotizador';
      case 17:
        return 'Carro';
      case 18:
        return 'Carro';
      case 19:
        return 'Carro y Cotizador';
      case 20:
        return 'Carro y Cotizador';
      case 21:
        return 'Carro y Cotizador';
      case 22:
        return 'Cotizador';
      case 23:
        return 'Carro y Cotizador';
      case 24:
        return 'Carro y Cotizador';
      case 25:
        return 'Carro y Cotizador';
      case 26:
        return 'Cotizador';
      case 27:
        return 'Carro';
      case 28:
        return 'Cotizador';
      case 29:
        return 'Cotizador';
      case 30:
        return 'Cotizador';
      case 31:
        return 'Carro';
      case 32:
        return '';
        
      default:
        return '';
    }
  }

  return (
    <>
    <Navbar toggle={toggle} isOpen={isOpen}/>
    <Sidebar isOpen={isOpen} toggle={toggle} /> 
    
    <Box sx={styleImportante}>
    <Typography sx={{ mb: 2 }} id="modal-modal-title" variant="button" component="h2">
      Elige el cliente del que necesitar ver la informacion
    </Typography>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cliente}
            label="Cliente"
            onChange={handleChange}
        >
            <MenuItem value={1}>Aitec</MenuItem>
            <MenuItem value={2}>Agropuelma</MenuItem>
            <MenuItem value={3}>Outlet Anasec</MenuItem>
            <MenuItem value={4}>Disvalenzuela</MenuItem>
            <MenuItem value={5}>Emsesa</MenuItem>
            <MenuItem value={6}>Federicogili</MenuItem>
            <MenuItem value={7}>Ferosor</MenuItem>
            <MenuItem value={8}>Flowmak</MenuItem>
            <MenuItem value={9}>Gobantes</MenuItem>
            <MenuItem value={10}>Gymsa</MenuItem>
            <MenuItem value={11}>Hoffens</MenuItem>
            <MenuItem value={12}>Imatesa</MenuItem>
            <MenuItem value={13}>Sargent</MenuItem>
            <MenuItem value={14}>ComercialSocoepa</MenuItem>
            <MenuItem value={15}>Ubike</MenuItem>
            <MenuItem value={16}>Vonunger</MenuItem>
            <MenuItem value={17}>Vietnamese</MenuItem>
            <MenuItem value={18}>Dtparts</MenuItem>
            <MenuItem value={19}>Itecsa</MenuItem>
            <MenuItem value={20}>Hidroquillon</MenuItem>
            <MenuItem value={21}>Panificadoraunipan</MenuItem>
            <MenuItem value={22}>Gemco</MenuItem>
            <MenuItem value={23}>Greengoods</MenuItem>
            <MenuItem value={25}>NDU</MenuItem>
            <MenuItem value={26}>Tankequip</MenuItem>
            <MenuItem value={27}>Dipa Repuestos</MenuItem>
            <MenuItem value={28}>OyG</MenuItem>
            <MenuItem value={29}>Solucorp</MenuItem>
            <MenuItem value={30}>Aragonenergia</MenuItem>
            <MenuItem value={31}>Gobikes</MenuItem>
            <MenuItem value={32}>Syngenta</MenuItem>
            
        </Select>
        </FormControl>
        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
            {renderSwitch(cliente)}
      </Typography>
  </Box>
      

    </>
  )
}

export default Clientes
