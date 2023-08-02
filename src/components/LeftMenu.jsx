import React from "react"
import avatar from '../assets/avatar.png'
import { GoGraph } from 'react-icons/go';
import { FaSignOutAlt } from 'react-icons/fa';
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { MDBBtn } from 'mdb-react-ui-kit';







export const LeftMenu = ({onMenuClick,isMenuOpen}) => {

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
                </div>
              </div>
              <div className='navigations'>
                <ul>
                  <li>
                    <button className="leftButton" onClick={()=>onMenuClick('Dashboard')}><GoGraph />Dashboard</button>
                  </li>
                  <li>
                  <button className="leftButton" onClick={()=>onMenuClick('Budget')}>Budget</button>
                  </li>
                  <li>
                  <button className="leftButton" onClick={()=>onMenuClick('Expenses')}>Expenses</button>
                  </li>
                </ul>
              </div>
            </div>
             {/* <MDBBtn onClick={handleLogOut} rounded className='mx-2' color='info'>
                <FaSignOutAlt />Sign Out
             </MDBBtn> */}
            
          
          </div>
        );
    };
    
    