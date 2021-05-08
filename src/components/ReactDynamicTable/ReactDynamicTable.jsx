import React from "react" ;

import { newRecordId, Definition } from "../../Records/definitions" ; 
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const registry = (function(){

  let _id = 1; 
  const _generateId = ()=> {
    _id +=1; 
    return _id-1; 
  }
  return {
    id:()=>_generateId(), 
    create: (term, def) => {
      return {
        ID : _generateId(), 
        Term : term , 
        Definition  :def 
      }
    }
  }
})()

  
const basics = [
      registry.create('Registry',   ["A Registry contains records",
      "and assigns unique Ids to each"].join('')), 
      registry.create(
        'Record', 
        [`A Record is what you expect a record to be. Can`, 
          `be associated with several subRecords`].join('')), 
];


export class RecordcoreDefinition extends React.Component {

  render(){
    return (
          <div className="ag-theme-alpine" style={{height: 200, width: 600}}>
      <AgGridReact rowData={basics}>
          <AgGridColumn field="Term"></AgGridColumn>
          <AgGridColumn field="Definition"></AgGridColumn>
      </AgGridReact>
      </div>
 
    )
  }
}

export class RecordSection extends React.Component {


  render(){


    const recordOperations = [
      registry.create('Registry.Create', "RecordSet => Record"), 
      registry.create('Registry.Delete', "Record=>()"), 
      registry.create('Record.Edit',   "Record=>()"), 
    ];

   return (
      <div> 
      <RecordcoreDefinition/> 
      <h2>DynamicRecords</h2>

          <h3>A RecordOperation</h3>

          <div className="ag-theme-alpine" style={{height: 200, width: 600}}>
      <AgGridReact
          rowData={recordOperations}>
          <AgGridColumn field="ID"></AgGridColumn>
          <AgGridColumn field="Term"></AgGridColumn>
      </AgGridReact>
      </div>
     </div> 
    )
  }
}

export class ReactDynamicTable extends React.Component {

    constructor( props ){
        super(props) ; 
    }

    render(){
      return(
      
      <div>
      <h1>Specs of Project</h1>

      <p>Tables that update themselves. This is the website  
       for the implementation of a structure I'm still mulling over. 
       A table is made of rows, each row is made of cells. when you click
       on a row, it opens a form.  
      </p>
      <RecordSection/>
      
      <h2>DynamicViews</h2>
          <ul>
            <li>A <strong>DynamicView</strong>can be either a 
            <strong>DynamicForm</strong> or a <strong>DynamicRow</strong>
            </li>
            <li>
                A <strong>DynamicView</strong> is associated 1-to-1 
                with a <strong>DynamicRecord</strong>
            </li> 
            <li>A view has a header and a footer, both of of which 
                are <strong>DynamicRows</strong></li> 
          </ul>
          <h3>Rows</h3>
          <ul>
          <li>Clicking on a row opens a form view of the record</li>
          <li>A row is a a linear arragment of "cells." Each cell 
            displays a view of a field in a record. 
          </li>
          </ul>
          <h3>forms</h3>
          <ul>
          <li>A form is a stack arragment of "cells"</li>
          <li>A table can update itself</li>
          <li>A row can update itself</li>
          </ul>

        <h2>Cells</h2>
          <ul>
            <li>A cell can update its value from the data source</li>
            <li>A cell might be updatable through user input</li>
            <li>Events can be attached to cells, rows, forms, and table</li> 
          </ul>
 
        <h2>Tables</h2>
        <ul>
          <li>A table is an arragnment of rows</li>

        </ul>
      </div>)
 
    }
} ; 
