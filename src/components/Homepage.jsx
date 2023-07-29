import React, { useState } from 'react'
import '../styles/Homepage.css'
import { Budget } from '../components/Budget'
import {Expenses} from '../components/Expenses'
import {Dashboard} from '../components/Dashboard'
import LeftMenu from './leftMenu'
import { useActionData } from 'react-router-dom'





export const Homepage = () => {
  const [activeComponent, setActiveComponent]=useState('Dashboard');
  const handleMenuClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className='home'>
      <div className='home-container'>
      <LeftMenu onMenuClick={handleMenuClick}/>
      <div className='components'>
          {activeComponent === 'Dashboard' && <Dashboard />}
          {activeComponent === 'Budget' && <Budget />}
          {activeComponent === 'Expenses' && <Expenses />}   
      </div>
      </div>
      
    </div>
  )
}
