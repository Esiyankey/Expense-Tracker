import React,{useState} from 'react'
import '../styles/Expenses.css'
import { FaDollarSign,FaUserPlus } from 'react-icons/fa'



export const Expenses = () => {
  const [totalExpenses,setTotalExpenses] =useState(0)
  const [expensesTitle,setExpensesTitle]=useState('')
  const expensesTitleEvent = (e)=>{
    setExpensesTitle(e.target.value)
  }
   
  const [expensesAmount,setExpensesAmount]=useState('')
  const expensesInputEvent =(event)=>{
    setExpensesAmount(event.target.value)
  }

  const addExpenses =()=>{
    const expenseAsNumber = parseInt(expensesAmount,10)
    if(!isNaN(expenseAsNumber)){
      setTotalExpenses(totalExpenses + expenseAsNumber)
      setExpensesAmount('')
    }
  }
  
   
    

  return (
    <div className='main'>
      <h3>Expenses</h3>
      <div className='expenses-results'>
          {/* This div checks the total budget */}
              <h3>Total Expenses:</h3><FaDollarSign/>{totalExpenses}
      </div>

      <div className='bottom'>
      
            <div >
             <form className='expenses-setup'  action="">
              <input onChange={expensesTitleEvent} type="text" name="Expenses Title" id="" placeholder='Expenses Title' />
              <input onChange={expensesInputEvent} type="text"  name='Expenses Amount' placeholder='Expenses Amount'/>
              <input type='date' name="Enter a Date" id="" placeholder='Enter A Date' />
              <textarea name="reference" id="" cols="25" rows="10" placeholder='Add A Reference'></textarea>
             </form>
             <button onClick={addExpenses}>Add Expenses</button>
            </div>
            <div className='expenses'>

            </div>
          
      </div>
    </div>
  )
}
