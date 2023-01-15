import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./birthReports.scss";

const BirthReports = () => {
  return (
    <div className='birthReports'>
      <Submenu 
        addLink="addBirthReport" 
        viewLink="viewBirthReports" 
        page = "Report"
      />
    </div>
  )
}

export default BirthReports