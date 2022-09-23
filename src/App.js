import React, { useState } from 'react';
import './App.css';
import Excel from './components/Excel';
import Modales from './components/Modales';

function App() {
  const [data, setData] = useState()
  const [linkImg, setLinkImg] = useState()
  const [impuestos, setImpuestos] = useState()
  const [open, setOpen] = useState(false);
  const [openCol, setOpenCol] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleOpenCol = () => setOpenCol(true);


  return (
    <div style={{ maxWidth: "100%", backgroundColor:"#000" }}>
      <h1 className="titulo" align="center">Enexum - Prestashop</h1>
      <h4 className="titulo" align='center'>Planillas a CSV</h4>
      <Excel data={data} setData={setData} handleOpenCol={handleOpenCol} handleOpen={handleOpen} />
      <Modales setData={setData}setOpenCol={setOpenCol} linkImg={linkImg} setOpen={setOpen}
      data={data} open={open} setLinkImg={setLinkImg} openCol={openCol} setImpuestos={setImpuestos} />
    </div>
  );
}

export default App;
