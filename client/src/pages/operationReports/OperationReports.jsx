import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Submenu from '../../components/submenu/Submenu';
import "./operationReports.scss";

const OperationReports = () => {
  return (
    <div className='operationReports'>
        
        <Submenu 
          addLink="addOperationReport" 
          viewLink="viewOperationReports" 
          page = "Report"
        />
    </div>
  )
}

export default OperationReports