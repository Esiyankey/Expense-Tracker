import React,{useState} from 'react'
import { GoGraph } from 'react-icons/go';
import { FaSignOutAlt } from 'react-icons/fa';
import avatar from '../assets/avatar.png';

export const NavSmall = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`navbar ${isSidebarOpen ? 'open' : ''}`}>
      <div className='toggler' onClick={handleToggleSidebar}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className='top'>
        <div className='user'>
          <img src={avatar} alt='user image' height={50} width={50} />
          <div className='details'>
            <h3>UserName</h3>
            <p>Your Money</p>
          </div>
        </div>
        <div className={`navigations ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a className='Dashboard' href='#'>
                <GoGraph />
                Dashboard
              </a>
            </li>
            <li>
              <a className='Budget' href='#'>
                Budget
              </a>
            </li>
            <li>
              <a className='Expenses' href='#'>
                Expenses
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`button ${isSidebarOpen ? 'open' : ''}`}>
        <button>
          <FaSignOutAlt />Sign Out
        </button>
      </div>
    </div>
  )
}
