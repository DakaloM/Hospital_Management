import React from 'react';
import "./addVitals.scss";

const AddVitals = () => {
  return (
    <div className='addVitals'>
      <div className="wrapper">
          <span>Add Vitals</span>
          <hr />

          <form action="">
             <div className="item">
                <label htmlFor="name">Patient</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Body Temeprature</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Pulse Rate</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Respiration Rate</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Blood Pressure</label>
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

export default AddVitals