import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./receptionists.scss"

const Receptionists = () => {
  return (
    <div className='receptionists'>
        <Submenu 
          addLink="addReceptionist" 
          viewLink="viewReceptionists"  
          page="Receptionist"
        />
    </div>
  )
}

export default Receptionists