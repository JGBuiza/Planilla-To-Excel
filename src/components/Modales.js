import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '25px',
    p: 4,
  };

  const styleLink = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '25px',
    p: 4,
  };

  const styleImportante = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '25px',
    p: 4,
  };


const Modales = ({ verifyLink, setOpen, copiaLink, linkImg, setLinkImg, open, openGuia, 
  setOpenGuia, openImportante, setOpenImportante, openParametros, setOpenParametros,
  separador, celda, setCelda, setSeparador}) => {

    function validarURL(string) {
      let url;
      try {
        url = new URL(string);
      } catch (_) {
        return false;  
      }
    
      return url.protocol === "http:" || url.protocol === "https:";
    }
    
    const handleClose = () => {
      if(linkImg){
        validarURL(linkImg)
        verifyLink(copiaLink)
      }
      setOpen(false)}

      const handleCloseGuia = () => {
        setOpenGuia(false)}

      const handleCloseImportante = () => {
        setOpenImportante(false)}

        const handleCloseParametros = () => {
          setOpenParametros(false)}

  return (
    <div>
    
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={styleLink}>
      <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
        Para agregar las imagenes copia la URL del sitio 
      </Typography>
      <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
      <TextField size="medium" label="" variant="standard" 
      onChange={(e) => {
        setLinkImg(e.target.value);
      }} />
      <Button  onClick={handleClose}variant="contained" sx={{ m: 2 }}>Agregar</Button>
      </Typography>
      
      
    </Box>
  </Modal>

  <Modal
    open={openGuia}
    onClose={handleCloseGuia}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
      <Typography  sx={{ mb: 2 }} align="center" id="modal-modal-title" variant="h6" component="h2">
        Guia de las Planillas de Productos y Descuentos
      </Typography>
     
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            
              <Typography variant="button">Productos Simples</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container >
              <Grid item xs={6}>
              <Typography variant="caption">
              <ul>
                <li>SKU : Referencia nº</li>
                <li>ESTADO : Activo (0/1)</li>
                <li>NOMBRE DE PRODUCTO : Nombre*</li>
                <li>CATEGORÍAS : Categorías (x,y,z...)</li>
                <li>PRECIO CON IVA INCLUIDO : Precio impuestos incluidos</li>
                <li>PRECIO NETO : Precio impuestos excluidos</li>
                <li>STOCK : Cantidad</li>
                <li>PESO : Peso</li>
                <li>DESCRIPCIÓN CORTA : Resumen</li>
                <li>DESCRIPCIÓN LARGA : Descripción</li>
                <li>IMAGEN : URL's de las imágenes (x,y,z...)</li>
                <li>META TÍTULO : Meta-título</li>
                
              </ul>
              </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography variant="caption">
              <ul>
                <li>META DESCRIPCIÓN : Meta descripción</li>
                <li>META ETIQUETAS : Meta keywords</li>
                <li>EN OFERTA : En oferta</li>
                <li>ELIMINAR IMAGENES : Elimine las imágenes existentes</li>
                <li>CODIGO SAP : MPN </li>
                <li>MARCA O FABRICANTE : Marca</li>
                <li>PALABRAS CLAVE : Etiquetas (x,y,z...)</li>
                <li>ID DE SKU RELACIONADOS : </li>
                <li>ID IMPUESTOS: ID regla de impuestos</li>
                <li>CARACTERÍSTICA 1,2,.. : Se refiere a los nombres de Característica</li>
                <li>VALOR 1,2,.. : Se refiere a los valores de Característica</li>
                <li>Las columnas anteriores se transforman en Característica (Nombre:Valor:Posición:Personalizado)</li>
              </ul>
              </Typography>
              </Grid>
            
            </Grid>
              
            </AccordionDetails>  
          </Accordion>
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="button">Productos Padres</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container >
          <Grid item xs={6}>
          <Typography variant="caption">
          <ul>
            <li>SKU : Referencia nº</li>
            <li>ESTADO : Activo (0/1)</li>
            <li>NOMBRE DE PRODUCTO : Nombre*</li>
            <li>CATEGORÍAS : Categorías (x,y,z...)</li>
            <li>PRECIO CON IVA INCLUIDO : Precio impuestos incluidos</li>
            <li>PRECIO NETO : Precio impuestos excluidos</li>
            <li>STOCK : Cantidad</li>
            <li>PESO : Peso</li>
            <li>DESCRIPCIÓN CORTA : Resumen</li>
            <li>DESCRIPCIÓN LARGA : Descripción</li>
            <li>IMAGEN : URL's de las imágenes (x,y,z...)</li>
            <li>META TÍTULO : Meta-título</li>
            
          </ul>
          </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="caption">
          <ul>
            <li>META DESCRIPCIÓN : Meta descripción</li>
            <li>META ETIQUETAS : Meta keywords</li>
            <li>EN OFERTA : En oferta</li>
            <li>ELIMINAR IMAGENES : Elimine las imágenes existentes</li>
            <li>CODIGO SAP : MPN </li>
            <li>MARCA O FABRICANTE : Marca</li>
            <li>PALABRAS CLAVE : Etiquetas (x,y,z...)</li>
            <li>ID DE SKU RELACIONADOS : </li>
            <li>ID IMPUESTOS: ID regla de impuestos</li>
            <li>CARACTERÍSTICA 1,2,.. : Se refiere a los nombres de Característica</li>
            <li>VALOR 1,2,.. : Se refiere a los valores de Característica</li>
            <li>Las columnas anteriores se transforman en Característica (Nombre:Valor:Posición:Personalizado)</li>
          </ul>
          </Typography>
          </Grid>
        
          </Grid>
          </AccordionDetails>
        </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="button">Productos Hijos</Typography>
            </AccordionSummary>
            <AccordionDetails >
            <Grid container >
            <Grid item xs={6}>
            <Typography variant="caption">
            <ul>
              <li>SKU PADRE </li>
              <li>SKU HIJO</li>
              <li>PRECIO CON IVA INCLUIDO</li>
              <li>STOCK</li>
              <li>PESO</li>
            </ul>
            </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="caption">
            <ul>
            <li>IMAGEN</li>
            <li>PREDETERMINADO</li>
            <li>ATRIBUTO 1,2,..</li>
            <li>VALOR 1,2,..</li>
            <li>Las columnas anteriores se transformas en ATRIBUTOS y VALORES respectivamente</li>
            </ul>
            </Typography>
            </Grid>
          
            </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="button">Descuentos</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container >
            <Grid item xs={6}>
            <Typography variant="caption">
            <ul>
              <li>ID </li>
              <li>SKU</li>
              <li>NOMBRE</li>
              <li>PRECIO NETO</li>
              <li>ID IMPUESTOS</li>
              <li>CATEGORÍAS</li>
            </ul>
            </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="caption">
            <ul>
            <li>MARCA</li>
            <li>DESCUENTO POR MONTO</li>
            <li>DESCUENTO POR %</li>
            <li>FECHA DESDE (aaaa-mm-dd hh:mm:ss)</li>
            <li>FECHA HASTA (aaaa-mm-dd hh:mm:ss)</li>
            </ul>
            </Typography>
            </Grid>
          
          </Grid>
            </AccordionDetails>
          </Accordion>
     
      <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
      <Button onClick={handleCloseGuia}variant="contained" >OK</Button>
      </Typography>
    </Box>
  </Modal>

  <Modal
  open={openImportante}
  onClose={handleCloseImportante}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >
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
      <Button onClick={handleCloseImportante}variant="contained" >OK</Button>
      </Typography>
  </Box>
</Modal>

<Modal
  open={openParametros}
  onClose={handleCloseParametros}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >
  <Box sx={styleImportante}>
    <Typography align="center" id="modal-modal-title" variant="button" component="h2">
      Parametros
    </Typography>
    <Typography align="center" sx={{ mt: 2 }} variant="subtitle1">
    <TextField
    id="outlined"
    label="Delimitador"
    defaultValue={separador}
    onChange={e => {
      setSeparador(e.target.value);}}
  />
  <TextField
          sx={{ mx: 2}}
          id="outlined"
          label="Separador Caracteres"
          defaultValue={celda}
          onChange={e => {
            setCelda(e.target.value);}}
        />
    
        </Typography>
        <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
      <Button onClick={handleCloseParametros}variant="contained" >OK</Button>
      </Typography>
  </Box>
</Modal>

  </div>
  )
}

export default Modales