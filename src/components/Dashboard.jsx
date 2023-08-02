import React from 'react'
import '../styles/Dashboard.css'
import { useEffect } from 'react'





export const Dashboard = ({incomeValue,totalExpenses,percentageLeft,setPercentageLeft}) => {



  return (
    <div className='MainDashboard'>
       <div className="l-dashboard">
        <div className='transactions'>
          <h1>All Transactions</h1>
          <div className='chart'>
            
          </div>
        </div>

       <div className='totals'>
         <div className='income-expenses'>
          <div className='total-income'>
              <h4>Total Income for Spending</h4>
              <div className="amount">
              {(incomeValue-(percentageLeft*incomeValue))}
          </div>
          </div>
          <div className='total-expenses'>
          <h4>Total Expenses</h4>
          <div className="amount">
            {totalExpenses}
          </div>
          </div>    
         </div>
         <div className='balance'>
          <div className='total-balance'>
           <h4>Total Balance</h4>
           <div className="amount">
             {(incomeValue-(percentageLeft*incomeValue))-totalExpenses}
           </div>
          </div>
         </div>
       </div>
        
      </div>
      <div className='r-dashboard'>
         
        </div>
    </div>
  )
}
