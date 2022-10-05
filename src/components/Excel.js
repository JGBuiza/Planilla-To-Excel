import React, { useState, useEffect } from 'react';
import  * as XLSX from 'xlsx'
import { CSVLink } from "react-csv";
import MaterialTable from 'material-table'
import Button from '@mui/material/Button';
import Modales from './Modales';
import moment from 'moment';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const EXTENSIONS = ['xlsx', 'xls', 'csv']


const Excel = ({setOpen, open, data, setData}) => {
    const [colDefs, setColDefs] = useState()
    const [headers, setHeaders] = useState()
    const [linkImg, setLinkImg] = useState()
    let copiaLink

    const handleOpen = () => {
      if(headers.includes("IMAGEN")){
        verifyLink(linkImg, data)
        setOpen(true)
      }else{
        alert("Tu planilla no contiene la columna (IMAGEN)")
      }
      
    };    
    const verifyLink =  (copiaLink) => {
      if(copiaLink){
        data.forEach((item) => {
          item.IMAGEN= item.IMAGEN.replaceAll(' ','');
            if(item.IMAGEN.includes('|')){
              item.IMAGEN= item.IMAGEN.replace(copiaLink,'');
              item.IMAGEN= item.IMAGEN.replaceAll('|'+copiaLink,'|');

            }else{
              item.IMAGEN= item.IMAGEN.replace(copiaLink,'');
            }
         
      })}else{
        if(linkImg){
          data.forEach((item) => {
            item.IMAGEN= item.IMAGEN.replaceAll(' ','');
            if(item.IMAGEN.includes('|')){
                item.IMAGEN= linkImg+item.IMAGEN
                item.IMAGEN=item.IMAGEN.replace(/[|]/g, '|'+linkImg)
  
            }else{
                item.IMAGEN= linkImg+item.IMAGEN
            }
         
      })
        }
        
      }}
    // eslint-disable-next-line
    useEffect(() => { verifyLink( copiaLink) }, [copiaLink])

    const filtrarColumnas = (indexes) => {
        let uniqueChars = indexes.filter((element, index) => {
          return indexes.indexOf(element) === index;
        });
        setHeaders(uniqueChars);
        const aux2 = uniqueChars.map(head => ({title: head, field: head}))
        setColDefs(aux2);
      }

    const getExention = (file) => {
        const parts = file.name.split('.')
        const extension = parts[parts.length - 1]
        return EXTENSIONS.includes(extension) // return boolean
      }
    
    const convertToJson = (headers, data) => {
    const indexes = []
    let caracteristica = []
    let valores = []
    const celdas = []
    let dato = {}
   
        data.forEach(row => {
          row.forEach((element, index) => {
            if(headers[index].includes('CARACTERÍSTICA') ||headers[index].includes('VALOR') ){
              if(headers[index].includes('CARACTERÍSTICA')){
                let clave = element+ ':'
                caracteristica.push(clave)
              }else{
                let valor = element+ ':' 
                caracteristica.push(valor)
                var Orden = headers[index].charAt(headers[index].length-1);
                parseInt(Orden)
                Orden--;
                Orden.toString()
                caracteristica.push(Orden+ '|')
              }
            }else{
              indexes.push(headers[index])
              dato[headers[index]] = element  
            }
            if(caracteristica.length>0){
              indexes.push('CARACTERÍSTICA')
              let aux = caracteristica.toString().replace(/[,]/g, "");
              dato['CARACTERÍSTICA'] = aux.substr(0, aux.length - 1);
              celdas.push(dato)
            }else{
            celdas.push(dato)}      
            caracteristica = []
          })  
            
        });
  
        
 
    filtrarColumnas(indexes)
    return celdas
    }


    function Recargar() {
      window.location.reload(false);
    }
    
    

    const importExcel = (e) => {
      
        const file = e.target.files[0]
    
        const reader = new FileReader()
        reader.onload = (event) => {
          //parseo de datos
          const bstr = event.target.result
          const workBook = XLSX.read(bstr, { type: "binary" })
          //obtener hoja
          const workSheetName = workBook.SheetNames[0]
          const workSheet = workBook.Sheets[workSheetName]
      
          //conversion en arreglo
          const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1})
          const headers = fileData[0]
          //Fuera el header 
          fileData.splice(0, 1)
          //Indices de las descripciones
          let descCorta = headers.indexOf('DESCRIPCIÓN CORTA')
          let descLarga = headers.indexOf('DESCRIPCIÓN LARGA')
          let estado = headers.indexOf('ESTADO')
          let categorias = headers.indexOf('CATEGORÍAS')
          let stock = headers.indexOf('STOCK')
          let peso = headers.indexOf('PESO')
          let impuestos = headers.indexOf('ID IMPUESTOS')
          let eliminarImg = headers.indexOf('ELIMINAR IMAGENES')
          let oferta = headers.indexOf('EN OFERTA')
          let descInicio = headers.indexOf('Fecha Desde (aaaa-mm-dd hh:mm:ss)')
          let descTermino = headers.indexOf('Fecha Hasta (aaaa-mm-dd hh:mm:ss)')
          let descMonto = headers.indexOf('Descuento por monto')
          let nombre = headers.indexOf('Nombre')
          let precioNeto = headers.indexOf('Precio Neto')
          let precioIVA = headers.indexOf('Precio Con IVA INCLUIDO')
          let descPorcentaje = headers.indexOf('Descuento por %')
          //validacion de caracteres
          for(let i=0; i<fileData.length; i++){
            for(let j=0; j<fileData[i].length; j++){
              
              //validacion nulos
              if (typeof fileData[i][j] == 'undefined') {
                fileData[i][j]= ''
              }
              //barrido de caracteres
              // eslint-disable-next-line 
              if(j===descCorta || j===descLarga){
                // eslint-disable-next-line 
                fileData[i][j]= fileData[i][j].toString().replace(/["/&\\\#+$~%':*?{}]/g, '')
              } 
              if(j=== descInicio|| j===descTermino){
                if(moment(fileData[i][j], "YYYY-MM-DD HH:mm:ss", true).isValid()=== false){
                  // eslint-disable-next-line 
                  fileData[i][j]= fileData[i][j].toString().replace(/[/]/g, '-')
              //Verificar orden de la fecha
                 if(fileData[i][j].charAt(2)==='-'){
                  let string1 = fileData[i][j].substring(0, 10).split('').reverse().join('')
                  let string2 = fileData[i][j].substring(11)
                  fileData[i][j] = string1+' '+string2
                 } 
                                                 
                }   
              }
              else{
                if(j=== nombre || j=== precioNeto || j=== precioIVA){
                  if(j=== precioNeto || j=== precioIVA){
                    if(fileData[i][j].toString().includes('.')){
                      let aux = fileData[i][j].toString()
                      fileData[i][j]=aux.substring(0, aux.lastIndexOf('.'))
                    }
                    
                  }
                }else{
                  //puntos por barras
                  if(typeof fileData[i][j] ==='number'){
                    fileData[i][j]=fileData[i][j].toString().replace(/[.]/g, "|");
                  }
                  // eslint-disable-next-line 
                  fileData[i][j]= fileData[i][j].toString().replace(/[&\\\/#+$<>~%':*?{}=]/g, '')

                  if(fileData[i][j].includes(']')){
                    fileData[i][j]=fileData[i][j].replace(/]/g, ")");
                  }
                  if(fileData[i][j].includes('[')){
                    fileData[i][j]=fileData[i][j].replace(/[[]/g, "(");
                  }
                  if(fileData[i][j].includes(',')){
                    fileData[i][j]=fileData[i][j].replace(/[,]/g, "|");
                  }
                  if(fileData[i][j].includes(';')){
                    fileData[i][j]=fileData[i][j].replace(/[;]/g, "|");
                  }
                  //validacion inicio y fin con _
                  if( /^_/i.test(fileData[i][j]) ) {
                    fileData[i][j]=fileData[i][j].slice(1)
                  }
                  if( /_$/i.test(fileData[i][j])) {
                    fileData[i][j]=fileData[i][j].slice(0, -1)
                  }
                  //validacion de columnas numericas
                  if(j===estado||j===categorias||j===stock||j===peso
                    ||j===impuestos||j===eliminarImg||j===oferta || j===descMonto ){
                    fileData[i][j]= fileData[i][j].toString().replace(/[^\d.|]/g, '');
                  }
                  if(j===descPorcentaje){
                    //Quitar los porcentajes
                    fileData[i][j]= fileData[i][j].toString().replace(/[|]/g, '');
                    fileData[i][j]= fileData[i][j].toString().replace(/[^\d]/g, '');
                  }
                }
                
              }
              
              
          }
        } 
          setData(convertToJson(headers, fileData))   
        }
    
        if (file) {
          if (getExention(file)) {
            reader.readAsBinaryString(file)
          }
          else {
            alert("Archivo no valido")
          }
        } else {
          setData([])
          setColDefs([])
        }
      }  
  return (
    <div>
    
      {data? <><Button sx={{ m: 2, mx: 10 }} startIcon={<FontAwesomeIcon icon={faRotate} />} onClick={Recargar} variant="contained" component="label">Recargar</Button><Button variant="contained" color="warning" startIcon={<FontAwesomeIcon icon={faLink} />} onClick={handleOpen}>Link imagenes</Button>
startIcon={<FontAwesomeIcon icon={faFile} />}
      <Button sx={{ mx: 2}} color="success" startIcon={<FontAwesomeIcon icon={faDownload} />} variant="contained">
      <CSVLink data={data} className="btn-descargar"  headers={headers} filename={"planilla.csv"} separator={"]"} enclosingCharacter={``}>
      Descargar csv
    </CSVLink></Button> </>: <div><Button sx={{ m: 2, mx: 10 }}  variant="contained" startIcon={<FontAwesomeIcon icon={faFile} />} component="label">Subir Archivo
    <input hidden type="file" onChange={importExcel} /></Button> </div>}  
    {data? <><div style={{ padding: "40px", backgroundColor:"#949494", height: "100% " }}>   
    <MaterialTable
    columns={colDefs}
    data={data}
    title="Planilla Productos"
  
    localization={{
      header: {
        actions: '',},
        pagination: {labelDisplayedRows: '{from}-{to} de {count}',
        labelRowsSelect: "registros"},
      body: {
        editTooltip: "Editar",
        deleteTooltip: "Eliminar",
        addTooltip: "Añadir",
        editRow: { deleteText: 'Estas seguro que deseas eliminar el registro ?',
        saveTooltip: 'Guardar',
        cancelTooltip: 'Cancelar'},
        emptyDataSourceMessage: (
            <h2>
                Carga la Planilla (.xlsx, .xls) 
            </h2>
        ),
          },
            toolbar: {
                searchPlaceholder: 'Buscar'
            }
        }}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    
        options={{
          showTitle:false,
          draggable:false,
          exportButton: false,
          pageSize:10, 
          headerStyle: {
            backgroundColor: '#474747',
            padding: '1px',
            color: '#fff',
            fontSize: 10,
            align: 'center',
          },
          padding:'dense',
          rowStyle: {
            padding: '1px',
            fontSize: 12,
            backgroundColor: '#EEE',
            color: '#000',
          }
        }}
      />
   
    </div></>:<><div style={{ padding: "40px", backgroundColor:"#949494", height: "100% " }}>   
    <MaterialTable
    columns={colDefs}
    data={data}
    title="Planilla Productos"
  
    localization={{
      header: {
        actions: 'ACCIONES',},
        pagination: {labelDisplayedRows: '{from}-{to} de {count}',
        labelRowsSelect: "registros"},
      body: {
        editTooltip: "Editar",
        deleteTooltip: "Eliminar",
        addTooltip: "Añadir",
        editRow: { deleteText: 'Estas seguro que deseas eliminar el registro ?' },
        emptyDataSourceMessage: (
            <h2>
                Carga la Planilla (.xlsx, .xls) 
            </h2>
        ),
          },
            toolbar: {
                searchPlaceholder: 'Buscar'
            }
        }}
    
    
        options={{
          showTitle:false,
          draggable:false,
          header:false,
          exportButton: false,
          pageSize:10, 
          headerStyle: {
            backgroundColor: '#474747',
            padding: '1px',
            color: '#fff',
            fontSize: 10,
            align: 'center',
          },
          padding:'dense',
          rowStyle: {
            padding: '1px',
            fontSize: 12,
            backgroundColor: '#EEE',
            color: '#000',
          }
        }}
      />
   
    </div></>}

    <Modales  verifyLink={verifyLink} setOpen={setOpen}
     linkImg={linkImg} copiaLink={copiaLink}
     setLinkImg={setLinkImg} open={open}/>
    </div>
  )
}

export default Excel