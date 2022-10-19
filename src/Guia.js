import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Guia = () => {
    const style = {
        position: 'absolute',
        top: '58%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
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
     
  
    </Box>
      

    </>
  )
}

export default Guia