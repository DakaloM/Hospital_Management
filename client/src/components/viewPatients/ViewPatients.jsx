import React from 'react';
import "./viewPatients.scss";

import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Search from '../seach/Search';
const ViewPatients = () => {
  return (
    <div className='viewPatients'>
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
                  <td>Phone</td>
                  <td>Sex</td>
                  <td>Age</td>
                  <td>Blood Type</td>
                  <td>Admition Date</td>
                  <td>Discharge Date</td>
                  <td>Options</td>
                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>+72 072 134 4014</td>
                  <td>Male</td>
                  <td>25</td>
                  <td>B+</td>
                  <td>2022-12-05</td>
                  <td>2023-01-10</td>
                  <td>
                    <div className="option">
                      <button className='edit'>
                        Edit
                      </button>
                      <button className='delete'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                

            </table>
          </div>
        </div>
    </div>
  )
}

export default ViewPatients