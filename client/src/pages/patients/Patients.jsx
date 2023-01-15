import React, { useState } from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./patients.scss";

const Patients = () => {

    
  return (
    <div className='patients'>
        <Submenu 
          addLink="addPatient" 
          viewLink="viewPatients"  
          page="Patient"
        />
    </div>
  )
}

export default Patients