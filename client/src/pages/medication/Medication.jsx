import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./medication.scss";

const Medication = () => {
  return (
    <div className='medication'>
         <Submenu 
          addLink="addMedication" 
          viewLink="viewMedications"  
          page="Medication"
        />
    </div>
  )
}

export default Medication