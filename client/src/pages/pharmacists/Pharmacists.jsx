import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./pharmacists.scss";

const Pharmacists = () => {
  return (
    <div className='pharmacists'>
        <Submenu 
          addLink="addPharmacist" 
          viewLink="viewPharmacists"  
          page="Pharmacist"
        />
    </div>
  )
}

export default Pharmacists