import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./prescriptions.scss";

const Prescriptions = () => {
  return (
    <div className='prescriptions'>
        <Submenu 
          addLink="addPrescription" 
          viewLink="viewPrescriptions"  
          page="Prescription"
        />
    </div>
  )
}

export default Prescriptions