import React, { useState } from 'react';
import '../styles/Expenses.css';
import { FaDollarSign } from 'react-icons/fa';

export const Expenses = () => {
  // State variables to manage the expenses and their total
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expensesTitle, setExpensesTitle] = useState('');
  const [expensesAmount, setExpensesAmount] = useState('');

  // Event handler for expenses title input
  const expensesTitleEvent = (e) => {
    setExpensesTitle(e.target.value);
  };

  // Event handler for expenses amount input
  const expensesInputEvent = (event) => {
    setExpensesAmount(event.target.value);
  };

  // Function to add expenses when the "Add Expenses" button is clicked
  const addExpenses = () => {
    const expenseAsNumber = parseInt(expensesAmount, 10);

    // Check for input errors
    if (expensesTitle.trim().length === 0) {
      alert('Please enter an expense title.');
      return;
    }

    if (isNaN(expenseAsNumber) || expenseAsNumber <= 0) {
      alert('Please enter a valid expense amount.');
      return;
    }

    // Add the expense if there are no input errors
    setTotalExpenses(totalExpenses + expenseAsNumber);
    setExpensesAmount('');
  };

  return (
    <div className='main'>
      <h3>Expenses</h3>
      <div className='expenses-results'>
        {/* This div displays the total expenses */}
        <h3>Total Expenses:</h3>
        <FaDollarSign />
        {totalExpenses}
      </div>

      <div className='bottom'>
        <div>
          {/* Form to input expenses details */}
          <form className='expenses-setup' action=''>
            <input
              onChange={expensesTitleEvent}
              type='text'
              name='Expenses Title'
              value={expensesTitle}
              placeholder='Expenses Title'
            />
            <input
              onChange={expensesInputEvent}
              type='text'
              name='Expenses Amount'
              value={expensesAmount}
              placeholder='Expenses Amount'
            />
            <input type='date' name='Enter a Date' placeholder='Enter A Date' />
            <textarea name='reference' cols='25' rows='10' placeholder='Add A Reference'></textarea>
          </form>
          <button onClick={addExpenses}>Add Expenses</button>
        </div>
        <div className='expenses'>
          {/* The list of expenses will be displayed here */}
        </div>
      </div>
    </div>
  );
};
