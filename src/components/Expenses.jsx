import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Expenses.css';
import { db } from '../config/firebase';
import { doc, onSnapshot, collection, setDoc, Timestamp, deleteDoc, updateDoc } from 'firebase/firestore';
import { MdDeleteForever } from 'react-icons/md';

export const Expenses = ({ totalExpenses, setTotalExpenses }) => {
  // State variables to manage the expenses and their total
  const [expensesTitle, setExpensesTitle] = useState('');
  const [expensesAmount, setExpensesAmount] = useState('');
  const [expensesDate, setExpensesDate] = useState('');
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


  // Function to add expenses to Firestore
  const AddExpenses = async () => {
    if (expensesTitle.trim() !== "" && expensesAmount.trim() !== "") {
      try {
        const expenseAsNumber = parseFloat(expensesAmount);
        if (isNaN(expenseAsNumber) || expenseAsNumber <= 0) {
          alert('Please enter a valid expense amount.');
          return;
        }
        // Initialize a new document
        const newDoc = doc(collection(db, "expense"));
        const newExpense = {
          id: newDoc.id,
          Title: expensesTitle,
          Amount: expensesAmount,
          Date: Timestamp.fromDate(new Date(expensesDate)),
          deleted: false,
        };

        // Set the new expense document in Firestore
        await setDoc(newDoc, newExpense);
        setExpensesAmount("");
        setExpensesTitle("");
        setExpensesDate("");
        // alert('Expense added');
      } catch (e) {
        alert("Error adding expenses");
        console.error("Error adding document: ", e);
      }
    }
  };
  
  
  // Fetch expenses data from Firestore on component mount
  useEffect(() => {
    const fetchExpenses = async () => {
      const expenseCollection = collection(db, 'expense');
      onSnapshot(expenseCollection, (querySnapshot) => {
        const expenseArray = [];
        querySnapshot.forEach((doc) => {
          expenseArray.push(doc.data());
        });
        setExpensesArray(expenseArray);
      });
    };
    fetchExpenses();
  }, []);


  // Function to calculate the total expenses
  const calculateTotalExpenses = () => {
    let total = 0;
    for (const expense of expensesArray) {
      total += parseFloat(expense.Amount);
    }
    return total;
  };

  // Memoize the total expenses calculation using useMemo
  const totalExpensesMemo = useMemo(() => calculateTotalExpenses(), [expensesArray]);
  
  // Update totalExpenses when totalExpensesMemo changes
  useEffect(() => {
    setTotalExpenses(totalExpensesMemo);
  }, [totalExpensesMemo, setTotalExpenses]);


  // The Date was not able to be displayed to the user
  // Function to format the date from Timestamp to a human-readable format
  const formatDate = (timestamp) => {
    if (timestamp) {
      const date = timestamp.toDate();
      return date.toLocaleDateString();
    }
    return "";
  };
  

  // Function to delete an expense from Firestore
  const deleteForever = async (expenseId) => {
    try {
      await deleteDoc(doc(db, "expense", expenseId));
      console.log("Expense deleted successfully!");
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };


  return (
    <div className='main'>
      {/* Expenses header */}
      <h3>Expenses</h3>

      {/* Display total expenses */}
      <div className='expenses-results'>
        <h3>Total Expenses:</h3>
        <h5>{totalExpenses}</h5>
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
          </form>
          {/* Add Expenses button */}
          <button onClick={AddExpenses}>Add Expenses</button>
        </div>

        <div className='expenses'>
          {/* The list of expenses will be displayed here */}
          <ul>
            {expensesArray.map((expense, index) => (
              <li key={index} className='title-expenses'>
                <h3>{expense.Title}</h3>
                <div className="amount">
                  Amount: ${parseFloat(expense.Amount).toFixed(2)}
                </div>
                <div className="date">
                  <div className="delete">
                    Date: {formatDate(expense.Date)}
                    <button className='deleteButton' onClick={() => deleteForever(expense.id)}>
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

