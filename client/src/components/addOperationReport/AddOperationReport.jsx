import React from 'react';
import "./addOperationReport.scss";

const AddOperationReport = () => {
  return (
    <div className='addOperationReport'>
      <div className="wrapper">
          <span>Add Report</span>
          <hr />

          <form action="">
             <div className="item">
                <label htmlFor="name">Patient</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Operation</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Condition State</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Position</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Incision</label>
                <input id="name" type="text" />
             </div>
             <div className="item">
                <label htmlFor="name">Findings</label>
                <input id="name" type="text" />
             </div>
             
             <div className="item">
                <label htmlFor="name">Doctor</label>
                <input id="name" type="text" />
             </div>
             
             <div className="item">
                <label htmlFor="name">Description</label>
                <textarea id="name" type="text"></textarea>
             </div>
             
             <div className="button">
              <button>Submit</button>
             </div>
             
             
          </form>
      </div>
    </div>
  )
}

export default AddOperationReport