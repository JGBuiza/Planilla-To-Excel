import React, { useState } from 'react';
import  * as XLSX from 'xlsx'
import { CSVLink } from "react-csv";
import MaterialTable from 'material-table'
import Button from '@mui/material/Button';

const EXTENSIONS = ['xlsx', 'xls', 'csv']


const Excel = ({data, setData, handleOpenCol, handleOpen}) => {
    const [colDefs, setColDefs] = useState()
    const [headers, setHeaders] = useState()

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
    const celdas = []
    data.forEach(row => {
        let dato = {}
        row.forEach((element, index) => {
        dato[headers[index]] = element  
        indexes.push(headers[index])
        }) 
        celdas.push(dato)
    });
    filtrarColumnas(indexes)
    return celdas
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
          //validacion de caracteres
          fileData.splice(0, 1)
          for(let i=0; i<fileData.length; i++){
            for(let j=0; j<fileData[i].length; j++){
              //puntos por barras
              if(typeof fileData[i][j] ==='number'){
                fileData[i][j]=fileData[i][j].toString().replace(/[.]/g, "|");
              }
              //barrido de caracteres
              // eslint-disable-next-line 
              fileData[i][j]= fileData[i][j].toString().replace(/[&\/\\#+$~%'":*?<>{}=]/g, '')
              
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
    <Button sx={{ m: 2, mx: 10 }}  variant="contained" component="label">Subir Archivo
      <input hidden type="file" onChange={importExcel} /></Button>

      
      {data? <><Button variant="contained" color="warning" onClick={handleOpen}>Link imagenes</Button>

      <Button sx={{ mx: 10}} variant="contained" color="error" onClick={handleOpenCol}>Agregar Columnas</Button>
      <Button sx={{ mx: 3}} color="success" variant="contained">
      <CSVLink data={data} className="btn-descargar" headers={headers} filename={"planilla.csv"} separator={"]"} enclosingCharacter={``}>
      Descargar csv
    </CSVLink></Button> </>: <div></div>}  
    <div style={{ padding: "40px", backgroundColor:"#949494", height: "69vh" }}>   
     <MaterialTable
      columns={colDefs}
      data={data}
      title="Planilla Productos"
      localization={{
        body: {
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
        exportButton: false,
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
    </div>
    </div>
  )
}

export default Excel