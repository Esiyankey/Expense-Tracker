import React from 'react'
import '../styles/Dashboard.css'
import { useEffect } from 'react'





export const Dashboard = () => {
  const Salaryexpense = (props)=>{
    return(
      <div className="Salaryexpense">
              <div><h4>Min</h4> <h4>{props.name}</h4><h4>Max</h4></div>
              <div className='target'><p>{props.minamount}</p><p>{props.maxamount}</p></div>
      </div>
    )
  }
  const Spendings =(props)=>{
    return(
      <div className='Spendings'> 
      <h4>{props.spendingsname}</h4> <h4>{props.spendingsamount}</h4>
      </div>
    )
  }

  useEffect(()=>{},[])

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
              <h4>Total Income</h4>
              <div className="amount">
          {`$${parseFloat().toFixed(2)}`}
          </div>
          </div>
          <div className='total-expenses'>
          <h4>Total Expenses</h4>
          <div className="amount">
          {`$${parseFloat().toFixed(2)}`}
          </div>
          </div>    
         </div>
         <div className='balance'>
          <div className='total-balance'>
           <h4>Total Balance</h4>
           <div className="amount">
             {`$${parseFloat().toFixed(2)}`}
           </div>
          </div>
         </div>
       </div>
        
      </div>
      <div className='r-dashboard'>
          <h3>Recent History</h3>
          <div className='salary-expense'>
            <Spendings spendingsname="Dentist Appointment" spendingsamount={300}/>
            <Salaryexpense name ="Salary" minamount={22} maxamount={22}/>
            <Salaryexpense name ="Expense" minamount={22} maxamount={22}/>
          </div>
        </div>
    </div>
  )
}
