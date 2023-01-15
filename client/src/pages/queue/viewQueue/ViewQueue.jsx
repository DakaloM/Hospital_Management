import React from 'react';
import "./viewQueue.scss";
import SearchIcon from '@mui/icons-material/Search';

const ViewQueue = () => {
  return (
    <div className=' viewQueue'>
        <div className="viewContainer">
          <div className="top">
            <div className="left">

                <div className="search">
                  <SearchIcon className="icon" />
                  <input type="text" placeholder='Search'/>
                </div>
                <button>Search</button>

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
                  <td>Queue Number</td>
                  <td>Options</td>
                </thead>
                
                <tr>
                  <td>1</td>
                  <td>Dakalo Mbulaheni</td>
                  <td>24</td>
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
                  <td>24</td>
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
                  <td>24</td>
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
                  <td>24</td>
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
                  <td>24</td>
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
                  <td>24</td>
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
                  <td>24</td>
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
                  <td>24</td>
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
                  <td>24</td>
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

export default ViewQueue