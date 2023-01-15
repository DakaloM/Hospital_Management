import React from 'react';
import Search from '../seach/Search';
import "./viewPrescriptions.scss";

const ViewPrescriptions = () => {
  return (
    <div className='viewPrescription'>
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
                  <td>Patient</td>
                  <td>Medication</td>
                  <td>Date</td>
                  <td>Doctor</td>
                  <td>Price</td>

                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>Panado</td>        
                  <td>2022-10-25</td>
                  <td>Dr Jackals</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>Panado</td>        
                  <td>2022-10-25</td>
                  <td>Dr Jackals</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>Panado</td>        
                  <td>2022-10-25</td>
                  <td>Dr Jackals</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>Panado</td>        
                  <td>2022-10-25</td>
                  <td>Dr Jackals</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>Panado</td>        
                  <td>2022-10-25</td>
                  <td>Dr Jackals</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>Panado</td>        
                  <td>2022-10-25</td>
                  <td>Dr Jackals</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                
                
            </table>
          </div>
      </div>
    </div>
  )
}

export default ViewPrescriptions