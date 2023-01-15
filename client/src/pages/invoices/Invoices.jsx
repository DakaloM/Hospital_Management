import React from 'react';
import "./invoices.scss";
import Submenu from '../../components/submenu/Submenu';

const Invoices = () => {
  return (
    <div className='invoices'>
        <Submenu 
          addLink="addInvoice" 
          viewLink="viewInvoices"  
          page="Invoice"
        />
    </div>
  )
}

export default Invoices