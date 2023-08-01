import React from "react"
import avatar from '../assets/avatar.png'
import { GoGraph } from 'react-icons/go';
import { FaSignOutAlt } from 'react-icons/fa';
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LeftMenu = ({onMenuClick,isMenuOpen}) => {

  const navigate=useNavigate();
  const auth = getAuth(app)

  const handleLogOut = () => {
    const LogOut = async () => {
      try {
        await auth.signOut();
        navigate("/");
      } catch (error) {
        alert("error loggin out");
        console.log(error);
      }
    };
    LogOut();
  };


    return (
          <div className={`left ${isMenuOpen?"active":""}`}>
            <div className='top'>
              <div className='user'>
                <img src={avatar} alt='user image' height={75} width={75} />
                <div className='details'>
                  <h3>UserName</h3>
                  <p>Your Money</p>
                </div>
              </div>
              <div className='navigations'>
                <ul>
                  <li>
                    <button onClick={()=>onMenuClick('Dashboard')}><GoGraph />Dashboard</button>
                  </li>
                  <li>
                  <button onClick={()=>onMenuClick('Budget')}>Budget</button>
                  </li>
                  <li>
                  <button onClick={()=>onMenuClick('Expenses')}>Expenses</button>
                  </li>
                </ul>
              </div>
            </div>
            
             <button className="sign-out" onClick={handleLogOut}>
                <FaSignOutAlt />Sign Out
             </button>
          
          </div>
        );
    };
    
    export default LeftMenu;
    