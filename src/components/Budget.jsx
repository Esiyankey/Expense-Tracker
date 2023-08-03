// // Import necessary modules and components
import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Budget.css';
import { db } from '../config/firebase';
import { doc, onSnapshot, collection, setDoc } from 'firebase/firestore';

// Budget component
export const Budget = ({ incomeValue, setIncomeValue, totalBudget, setTotalBudget }) => {
  // Constants and States
  const MAX_PERCENTAGE = 100;
  const [percentagesArray, setPercentageArray] = useState([]);
  const [percentageValue, setPercentageValue] = useState('');
  const [percentageTitle, setPercentageTitle] = useState('');
  const [percentageTracker, setPercentageTracker] = useState(0);
  const [inputError, setInputError] = useState('');
  const [incomeInputError, setIncomeInputError] = useState('');
  const [budgetsArray, setBudgetsArray] = useState([]);

  // Event handler for percentage value input
  const percentageValueEvent = (e) => {
    setPercentageValue(e.target.value);
    setInputError('');
  };

  // Event handler for percentage title input
  const percentageTitleEvent = (e) => {
    setPercentageTitle(e.target.value);
    setInputError('');
  };

  // Function to add a new budget percentage object
  const addPercentageObject = () => {
    // Validation checks for input fields
    if (!percentageTitle || !percentageValue) {
      setInputError('Both title and percentage fields are required.');
      return;
    }

    if (isNaN(percentageValue)) {
      setInputError('Percentage must be a valid number.');
      return;
    }

    const newPercentageObject = {
      title: percentageTitle,
      value: percentageValue,
    };

    const newTotalPercentage = percentageTracker + parseFloat(percentageValue);

    if (newTotalPercentage > MAX_PERCENTAGE) {
      setInputError(`Total percentage exceeds ${MAX_PERCENTAGE}%`);
      return;
    }

    // Add new percentage object to the array and update the tracker
    setPercentageArray([...percentagesArray, newPercentageObject]);
    setPercentageTracker(newTotalPercentage);
  };

  // Calculate the total percentage when percentagesArray changes
  useEffect(() => {
    let totalPercentages = 0;
    for (const percentagesObj of percentagesArray) {
      totalPercentages += parseFloat(percentagesObj.value);
    }
    setPercentageTracker(totalPercentages);
    console.log(percentageTracker); // Note: This may show the previous value due to closure, but the correct value is being used.
  }, [percentagesArray]);

  // Function to add a new budget to Firestore
  const AddBudget = async () => {
    if (percentageTitle.trim() !== "" && percentageValue.trim() !== "") {
      try {
        // Initialize new document
        const newDoc = doc(collection(db, "Budget"));
        const newBudget = {
          id: newDoc.id,
          Title: percentageTitle,
          Value: percentageValue,
          Income: incomeValue,
          deleted: false,
        };
        // Set the new budget document in Firestore
        await setDoc(newDoc, newBudget);
        setPercentageValue('');
        setPercentageTitle('');
        alert('Budget added successfully.');
      } catch (e) {
        alert("Error adding budget");
        console.error("Error adding document: ", e);
      }
    }
  };

  // Function to calculate the total budget based on budgetsArray
  const calculateTotalBudget = () => {
    let total = 0;
    for (const Budget of budgetsArray) {
      total += parseFloat(Budget.Value);
    }
    return total;
  };

  // Memoize the total expenses calculation using useMemo
  const totalBudgetMemo = useMemo(() => calculateTotalBudget(), [budgetsArray]);

  // Fetch budget data from Firestore on component mount
  useEffect(() => {
    const fetchBudget = async () => {
      const budgetCollection = collection(db, 'Budget');
      onSnapshot(budgetCollection, (querySnapshot) => {
        const budgetArray = [];
        querySnapshot.forEach((doc) => { budgetArray.push(doc.data()) });
        setBudgetsArray(budgetArray);
      });
    };
    fetchBudget();
  }, []);

  // Update totalBudget when totalBudgetMemo changes
  useEffect(() => {
    setTotalBudget(totalBudgetMemo);
  }, [totalBudgetMemo, setTotalBudget]);

  // JSX to render the component
  return (
    <div className='Main'>
      {/* Display total income */}
      <div className='balance'>
        <h3>Total Income:</h3>
        {/* Use toFixed(2) to display totalIncome with 2 decimal places */}
        {incomeValue}
      </div>

      <div className='bottom'>
        <div className='budget-divisions'>
          {/* Input field for Total Income */}
          <div className="incomeValue">
            <label id='Income'>Enter Total Income</label>
            <input
              className='income'
              type="text"
              onChange={(e) => {
                setIncomeValue(e.target.value)
              }}
              value={incomeValue}
            />
          </div>

          {/* Display error message for income input */}
          {incomeInputError && <div className='error-message'>{incomeInputError}</div>}

          {/* Input field for Budget percentages */}
          <div className='divisions'>
            <h3>Enter Budget percentages</h3>
            <div className='cylinder'>
              <div
                className='fill'
                style={{ width: `${(percentageTracker / MAX_PERCENTAGE) * 100}%` }}
              >
                {percentageTracker}%
              </div>
            </div>
            <div className='inputs'>
              {/* Input field for Budget Name */}
              <label>Budget Name</label>
              <input
                onChange={percentageTitleEvent}
                onFocus={() => setInputError('')}
                type="text"
                placeholder='title'
                value={percentageTitle}
              />

              {/* Input field for Budget Percentage */}
              <label htmlFor="">Budget percentage</label>
              <input
                onChange={percentageValueEvent}
                onFocus={() => setInputError('')}
                type="text"
                placeholder='Percentage'
                value={percentageValue}
              />
            </div>

            {/* Display error message for percentage input */}
            {inputError && <div className='error-message'>{inputError}</div>}

            {/* Add button to add a new budget percentage */}
            <div className="addButton">
              <button onClick={addPercentageObject}>Add</button>
            </div>

            {/* Display the list of budget percentages */}
            <div className='budget-percentages'>
              <ul>
                {percentagesArray.map((percentagesObj, index) => (
                  <li key={index} className='title-percentages'>
                    <h3>{percentagesObj.title}</h3>
                    <p>{percentagesObj.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Create Budget button */}
          <div className="createBudget">
            <button className='createButton' onClick={AddBudget}>Create Budget</button>
          </div>
        </div>

        {/* Placeholder for displaying the created budget */}
        <div className='newBudget'>
          <ul>
            {budgetsArray.map((items, index) => (
              <li key={index} className='title-percentages'>
                <h4>{items.Title}</h4>
                <p>{(items.Value / 100) * parseFloat(items.Income)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
