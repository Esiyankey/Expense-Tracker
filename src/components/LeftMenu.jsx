import React from "react"
import avatar from '../assets/avatar.png'
import { GoGraph } from 'react-icons/go';
import { FaSignOutAlt } from 'react-icons/fa';
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LeftMenu = () => {

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
          <div className='left'>
            <div className='top'>
              <div className='user'>
                <img src={avatar} alt='user image' height={60} width={60} />
                <div className='details'>
                  <h3>UserName</h3>
                  <p>Your Money</p>
                </div>
              </div>
              <div className='navigations'>
                <ul>
                  <li>
                    <button><GoGraph />Dashboard</button>
                  </li>
                  <li>
                  <button><GoGraph />Budget</button>
                  </li>
                  <li>
                  <button><GoGraph />Expenses</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='button'>
              <button onClick={handleLogOut}>
                <FaSignOutAlt />Sign Out
              </button>
            </div>
          </div>
        );
    };
    
    export default LeftMenu;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* <div className='left'>
            <div className='top'>
              <div className='user'>
                <img src={avatar} 
                alt="user image" 
                height={50} 
                width={50}/>
                <div className='details'>
                <h3>UserName</h3>
                <p>Your Money</p>
                </div>
              </div>
              <div className='navigations'>
                <ul>
                  <li><a className='Dashboard' href="#"><GoGraph/>Dashboard</a></li>
                  <li><a className='Budget' href="#">Budget</a></li>
                  <li><a className='Expenses' href="#">Expenses</a></li>
                </ul>
              </div>
            </div>
            <div className='button'>
              <button><FaSignOutAlt/>Sign Out</button>
            </div>
          </div> */}