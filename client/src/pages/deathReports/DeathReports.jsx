import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./deathReports.scss";

const DeathReports = () => {
  return (
    <div className='deathReports'>
      <Submenu
        addLink="addDeathReport" 
        viewLink="viewDeathReports" 
        page = "Report"
      />
    </div>
  )
}

export default DeathReports