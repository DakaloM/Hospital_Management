import React from 'react';
import "./addMedication.scss";

const AddMedication = () => {
  return (
    <div className='addMedication'>
      <div className="wrapper">
         <span>Add Report</span>
         <hr />

         <form action="">
            <div className="item">
               <label htmlFor="name">Name</label>
               <input id="name" type="text" />
            </div>
            <div className="item">
               <label htmlFor="name">Type</label>
               <input id="name" type="text" />
            </div>
            <div className="item">
               <label htmlFor="name">Age Restriction</label>
               <input id="name" type="text" />
            </div>
            <div className="item">
               <label htmlFor="name">Require Prescription</label>
               <input id="name" type="text" />
            </div>
            <div className="item">
               <label htmlFor="name">Price</label>
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

export default AddMedication