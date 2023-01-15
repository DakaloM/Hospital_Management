import React from 'react';
import "./addPrescription.scss";

const AddPrescription = () => {
  return (
    <div className='addPrescription'>
      <div className="wrapper">
         <span>Add Prescription</span>
         <hr />

         <form action="">
            <div className="item">
               <label htmlFor="name">Patient</label>
               <input id="name" type="text" />
            </div>
            <div className="item">
               <label htmlFor="name">Medication</label>
               <input id="name" type="text" />
            </div>
            <div className="item">
               <label htmlFor="name">Date</label>
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

export default AddPrescription