import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./nurses.scss";

const Nurses = () => {
  return (
    <div className='nurses'>
        <Submenu 
          addLink="addNurse" 
          viewLink="viewNurses"  
          page="Nurse"
        />
    </div>
  )
}

export default Nurses