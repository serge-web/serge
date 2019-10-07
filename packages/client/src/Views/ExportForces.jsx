import React from 'react';
import { connect } from "react-redux";

import { createExportItem } from "../ActionsAndReducers/ExportItems/ExportItems_ActionsCreators";
import ExportView from "./ExportView";
import ExportItem from "../Components//ExportItem";
import ExcelExport from '../Components/ExcelExport';
import HtmlExport from '../Components/HtmlExport';

const ExportForces = ({ wargame, savExportItem, exportItems }) => {

  const generateExportItem = () => {
    savExportItem({
      title: `Export ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`,
      wargame: wargame.currentWargame ? wargame.wargameTitle : 'Not Selected',
      data: wargame.data && wargame.data.forces && wargame.data.forces.forces ?
        wargame.data.forces.forces.map(force => ({
          title: force.name,
          items: generateRoleItems(force)
        })) : []
    })
  }

  const generateRoleItems = ({ roles }) => {
    //all excel keys/titles for current tab
    let fields = [];
    //rows under titles
    let rows = [];

    //loop on roles
    for(let role of roles) {

      //create row with empty items equal to current fields length
      let row = Array(fields.length).fill("");

      for(let key of Object.keys(role)) {
        if(typeof role[key] !== 'object') {
          //check if fields/titles have no current key then add
          if(!fields.includes(key)) {
            fields.push(key);
          }

          //check position for field then add value to rigth position in row
          row[fields.indexOf(key)] = role[key];
        }
      }

      rows.push(row);
    }

    return [
      fields.map(field => (field.toUpperCase())),
      ...rows
    ];
  }

  return (
    <ExportView>
      <h2>Export Forces</h2>
      <span className="link link--noIcon" onClick={generateExportItem}>Create Export</span>
      <ul>
        {exportItems.map((item, key) => (
          <ExportItem item={item} key={key}>
            <ExcelExport exp={item} index={key}/>
            <HtmlExport id={item.id}/>
          </ExportItem>
        ))}
      </ul>
    </ExportView>
  );
}

const mapStateToProps = ({ wargame, exportItems }) => ({
  wargame,
  exportItems: exportItems.map((item, key) => ({...item, id: key})).filter(item => item.type === 'forces')
});


const mapDispatchToProps = dispatch => ({
  savExportItem: data => {
    dispatch(createExportItem({
      ...data,
      type: 'forces'
    }))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExportForces);
