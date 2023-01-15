import React from 'react';
import Search from '../seach/Search';
import "./viewInvoices.scss";

const ViewInvoices = () => {
  return (
    <div className='viewInvoices'>
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
                  <td>Nuymber of Medication</td>
                  <td>Date</td>
                  <td>Price</td>

                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>5</td>        
                  <td>2022-10-25</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>5</td>        
                  <td>2022-10-25</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>5</td>        
                  <td>2022-10-25</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Jonh Mikel</td>
                  <td>5</td>        
                  <td>2022-10-25</td>                  
                  <td>R 1800.00</td>                  
                </tr>
                
                
                
            </table>
          </div>
      </div>
    </div>
  )
}

export default ViewInvoices