import React, { useState } from 'react';
import './App.css';
import Excel from './components/Excel';

function App() {
  const [data, setData] = useState()
  const [open, setOpen] = useState(false);
  
  return (
    <div style={{ maxWidth: "100%", backgroundColor:"#000" }}>
      <h1 className="titulo" align="center">Exportador de Planillas CSV</h1>
      <h4 className="titulo" align='center'>Enexum</h4>
      <Excel setOpen={setOpen}  open={open}  data={data} setData={setData}  />
      
    </div>
  );
}

export default App;
