import React from 'react';
import Search from '../seach/Search';
import "./viewMedication.scss";

const ViewMedication = () => {
  return (
    <div className='viewMedication'>
      <div className="viewContainer">
          <div className="top">
            <div className="left">

                <Search />

            </div>
            <div className="right">
              <div className="pagination">
                <span>pagination</span>
              </div>
            </div>
          </div>

          <div className="content">
            <table>
                <thead>
                  <td className='num'>#</td>
                  <td>Name</td>
                  <td>Type</td>
                  <td>Age Restriction</td>
                  <td>Require Prescription</td>
                  <td>Price</td>

                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Panado</td>
                  <td>Pain Medication</td>
                  <td>10 years</td>
                  <td>False</td>                  
                  <td>R 25.00 /g</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Panado</td>
                  <td>Pain Medication</td>
                  <td>10 years</td>
                  <td>False</td>                  
                  <td>R 25.00 /g</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Panado</td>
                  <td>Pain Medication</td>
                  <td>10 years</td>
                  <td>False</td>                  
                  <td>R 25.00 /g</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Panado</td>
                  <td>Pain Medication</td>
                  <td>10 years</td>
                  <td>False</td>                  
                  <td>R 25.00 /g</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Panado</td>
                  <td>Pain Medication</td>
                  <td>10 years</td>
                  <td>False</td>                  
                  <td>R 25.00 /g</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Panado</td>
                  <td>Pain Medication</td>
                  <td>10 years</td>
                  <td>False</td>                  
                  <td>R 25.00 /g</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Panado</td>
                  <td>Pain Medication</td>
                  <td>10 years</td>
                  <td>False</td>                  
                  <td>R 25.00 /g</td>                  
                </tr>
                
            </table>
          </div>
      </div>
    </div>
  )
}

export default ViewMedication