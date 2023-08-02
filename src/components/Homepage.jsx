import React, { useState } from 'react'
import '../styles/Homepage.css'
import { Budget } from '../components/Budget'
import {Expenses} from '../components/Expenses'
import {Dashboard} from '../components/Dashboard'
import {LeftMenu} from './LeftMenu'
import { useActionData } from 'react-router-dom'
import { FaBars } from "react-icons/fa";




export const Homepage = () => {
  const [activeComponent, setActiveComponent]=useState('Dashboard');
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const [incomeValue, setIncomeValue] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleMenuClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleClick = ()=>{
    setIsMenuOpen(!isMenuOpen)
    console.log("show side bar")
  }

  return (
    <div className="mainHome">
      <div className="mobileNavBar">
        <h2>Expenso</h2>
        <button className='mobileBar' onClick={handleClick}>
          <FaBars/>
        </button></div>
      <div className='home'>
       <div className='home-container'>
       <LeftMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
       <div className='components'>
          {activeComponent === 'Dashboard' && <Dashboard />}
          {activeComponent === 'Budget' && <Budget incomeValue={incomeValue} setIncomeValue={setIncomeValue}/>}
          {activeComponent === 'Expenses' && <Expenses totalExpenses={totalExpenses} setTotalExpenses={setTotalExpenses}/>}   
        
       </div>
       </div>
      
      </div>
    </div>
    
  )
}
