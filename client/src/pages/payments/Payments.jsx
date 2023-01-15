import React from 'react';
import "./payments.scss";
import Submenu from '../../components/submenu/Submenu';

const Payments = () => {
  return (
    <div className='payments'>
        <Submenu 
          addLink="addPayment" 
          viewLink="viewPayments"  
          page="Payment"
        />
    </div>
  )
}

export default Payments