import React from 'react';
import "./addInvoice.scss";

const AddInvoice = () => {
  return (
    <div className='addInvoice'>
      <div className="wrapper">
          <span>Add Patient</span>
          <hr />

          <form action="">
             <div className="item">
                <label htmlFor="name">First Name:</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Last Name:</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Date:</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Doctor:</label>
                <input id="name" type="text" />
             </div>

             <div className="button">
              <button>Submit</button>
             </div>
             
             
          </form>
      </div>
    </div>
  )
}

export default AddInvoice