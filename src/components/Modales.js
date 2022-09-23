import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Modales = ({setData,setOpenCol,linkImg,setOpen,data,open,setLinkImg,openCol, setImpuestos}) => {
    
    const handleCloseCol = () => {
        const aux = data
        const labelImpuestos = "ID IMPUESTO"
        aux.forEach((item) => {
            item[labelImpuestos] = 100
        });
        setData(aux)
        console.log(aux)
        console.log(data)
        setOpenCol(false)}
    
    const handleClose = () => {
        agregarLink(linkImg)
        setOpen(false)}

    const agregarLink = (url) => {
        if(validarURL(url)){
            data.forEach((item) => {
                if(item.IMAGEN.includes('|')){
                    item.IMAGEN= url+'/'+item.IMAGEN
                    item.IMAGEN=item.IMAGEN.replace(/[|]/g, '|'+url+'/')
                }else{
                    item.IMAGEN= url+'/'+item.IMAGEN
                }
            });
        }
        else{
        }
    }
    function validarURL(string) {
        let url;
        try {
          url = new URL(string);
        } catch (_) {
          return false;  
        }
      
        return url.protocol === "http:" || url.protocol === "https:";
      }

  return (
    <div><Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Para agregar las imagenes copia la URL del sitio 
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      <TextField size="medium" label="Copia el link" variant="standard" 
      onChange={(e) => {
        setLinkImg(e.target.value);
      }} />
      <Button onClick={handleClose}variant="contained" sx={{ m: 2 }}>Agregar</Button>
      </Typography>
    </Box>
  </Modal>

  <Modal
    open={openCol}
    onClose={handleCloseCol}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Selecciona las columnas extras e ingresa el valor por defecto. 
      </Typography>
      <Typography id="modal-modal-impuestos" sx={{ mt: 2 }}>
      <TextField size="medium" label="ID regla impuestos" variant="standard" 
      onChange={(e) => {
        setImpuestos(e.target.value);
      }} />
      <Button onClick={handleCloseCol}variant="contained" sx={{ m: 2 }}>Agregar Impuestos</Button>
      </Typography>

      
    </Box>
  </Modal></div>
  )
}

export default Modales