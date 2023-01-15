import React from 'react';
import Submenu from '../../components/submenu/Submenu';
import "./accountants.scss";

const Accountants = () => {
  return (
    <div className='accountants'>
        <Submenu 
          addLink="addAccountant" 
          viewLink="viewAccountants"  
          page="Accountant"
        />
    </div>
  )
}

export default Accountants