import React, { useState } from 'react';
import '../styles/Expenses.css';

export const Expenses = () => {
  // State variables to manage the expenses and their total
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expensesTitle, setExpensesTitle] = useState('');
  const [expensesAmount, setExpensesAmount] = useState('');
  const [expensesDate, setExpensesDate] = useState('');
  const [expensesReference, setExpensesReference] = useState('');
  const [expensesArray, setExpensesArray] = useState([]);

  // Event handler for expenses title input
  const expensesTitleEvent = (e) => {
    setExpensesTitle(e.target.value);
  };

  // Event handler for expenses amount input
  const expensesInputEvent = (event) => {
    setExpensesAmount(event.target.value);
  };

  // Event handler for expenses date input
  const expensesDateEvent = (event) => {
    setExpensesDate(event.target.value);
  };

  // Event handler for expenses reference input
  const expensesReferenceEvent = (event) => {
    setExpensesReference(event.target.value);
  };

  // Function to add expenses when the "Add Expenses" button is clicked
  const addExpenses = () => {
    // Check if all the fields are filled out before adding an expense
    if (!expensesTitle || !expensesAmount || !expensesDate || !expensesReference) {
      alert('Please fill out all the fields before adding an expense.');
      return;
    }

    const expenseAsNumber = parseInt(expensesAmount, 10);

    // Check for valid expense amount
    if (isNaN(expenseAsNumber) || expenseAsNumber <= 0) {
      alert('Please enter a valid expense amount.');
      return;
    }

    // Update the total expenses
    setTotalExpenses(totalExpenses + expenseAsNumber);

    // Create a new expenses object and add it to the expenses array
    const newExpensesObject = {
      title: expensesTitle,
      value: expenseAsNumber,
      date: expensesDate,
      reference: expensesReference,
    };

    setExpensesArray([...expensesArray, newExpensesObject]);

    // Clear the input fields
    setExpensesTitle('');
    setExpensesAmount('');
    setExpensesDate('');
    setExpensesReference('');
  };

  return (
    <div className='main'>
      {/* Expenses header */}
      <h3>Expenses</h3>

      {/* Display total expenses */}
      <div className='expenses-results'>
        <h3>Total Expenses:</h3>
        {`$${parseFloat(totalExpenses).toFixed(2)}`}
      </div>

      <div className='bottom'>
        <div className='expenses-inputs'>
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
            <input
              onChange={expensesDateEvent}
              type='date'
              name='Enter a Date'
              value={expensesDate}
              placeholder='Enter A Date'
            />
            <textarea
              onChange={expensesReferenceEvent}
              name='reference'
              cols='25'
              rows='10'
              value={expensesReference}
              placeholder='Add A Reference'
            ></textarea>
          </form>
          {/* Add Expenses button */}
          <button onClick={addExpenses}>Add Expenses</button>
        </div>

        <div className='expenses'>
          {/* The list of expenses will be displayed here */}
          <ul>
            {expensesArray.map((expense, index) => (
              <li key={index} className='title-expenses'>
                <h3>{expense.title}</h3>
                <p>
                  Amount:{`$${parseFloat(expense.value).toFixed(2)}`}
                </p>
                <p>Date: {expense.date}</p>
                <p>Reference: {expense.reference}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
