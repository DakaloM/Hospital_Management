import React from 'react';
import "./addBloodDonor.scss";

const AddBloodDonor = () => {
  return (
    <div className='addBloodDonor'>

         <div className="wrapper">
          <span>Add Patient</span>
          <hr />

          <form action="">
             <div className="item">
                <label htmlFor="name">First Name</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Last Name:</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Contact Number:</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Age:</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Gender:</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Blood Type:</label>
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

export default AddBloodDonor