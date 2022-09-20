import React, { useState } from 'react';
import './App.css';
import  * as XLSX from 'xlsx'
import MaterialTable from 'material-table'
import { CsvBuilder } from 'filefy';

const EXTENSIONS = ['xlsx', 'xls', 'csv']
function App() {
  const [colDefs, setColDefs] = useState()
  const [data, setData] = useState()

  const getExention = (file) => {
    const parts = file.name.split('.')
    const extension = parts[parts.length - 1]
    return EXTENSIONS.includes(extension) // return boolean
  }

  const convertToJson = (headers, data) => {
    const indexes = []
    const rows = []
    data.forEach(row => {
      let rowData = {}
      row.forEach((element, index) => {
        rowData[headers[index]] = element  
        indexes.push(headers[index])
      })
      rows.push(rowData)
    });
    let uniqueChars = indexes.filter((element, index) => {
      return indexes.indexOf(element) === index;
    });
    const aux = uniqueChars.map(head => ({ title: head, field: head}))
    setColDefs(aux);
    console.log(rows)
    return rows
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
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1, blankrows:false })
      const headers = fileData[0]
      //validacion de caracteres
      fileData.splice(0, 1)
      for(let i=0; i<fileData.length; i++){
        for(let j=0; j<fileData[i].length; j++){
          //validacion de caracteres especiales
          // eslint-disable-next-line 
          fileData[i][j]= fileData[i][j].toString().replace(/[&\/\\#,+$~%'":*?<>{}=]/g, '')
          if(fileData[i][j].includes(']')){
            fileData[i][j]=fileData[i][j].replace(/]/g, ")");
          }
          if(fileData[i][j].includes('[')){
            fileData[i][j]=fileData[i][j].replace(/[[]/g, "(");
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
    <div style={{ maxWidth: "100%" }}>
      <h1 align="center">Enexum - Prestashop</h1>
      <h4 align='center'>Convertidor de Excel to CSV</h4>
      <input type="file" onChange={importExcel} />
      <MaterialTable
      columns={colDefs}
      data={data}
      title="Planilla Productos"
      options={{
        exportButton: true,
        exportCsv: (colDefs, data) => {
          console.log(data)
          const columns = colDefs.filter(columnDef => columnDef["export"] !== false);
          const exportedData = data.map(rowData => columns.map(columnDef => rowData[columnDef.field]));
          var csvBuilder = new CsvBuilder("productos.csv")
            .setDelimeter(']')
            .setColumns(columns.map(columnDef => columnDef.title))
            .addRows(exportedData)
            .exportFile();
        }
       
      }}
    />
    
    </div>
  );
}

export default App;
