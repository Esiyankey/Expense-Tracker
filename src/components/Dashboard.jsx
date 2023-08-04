import React from 'react';
import '../styles/Dashboard.css';
import { useEffect } from 'react';

export const Dashboard = ({ incomeValue, totalExpenses, percentageLeft, setPercentageLeft }) => {
  return (
    <div className='MainDashboard'>
      {/* Left section of the dashboard */}
      <div className="l-dashboard">
        <div className='transactions'>
          <h1>All Transactions</h1>
          <div className='chart'>
            {/* Placeholder for a chart or graphical representation */}
          </div>
        </div>

        {/* Totals section */}
        <div className='totals'>
          <div className='income-expenses'>
            {/* Total Income */}
            <div className='total-income'>
              <h4>Total Income for Spending</h4>
              <div className="amount">
                {/* Display calculated total income for spending */}
                {incomeValue - (percentageLeft * incomeValue)}
              </div>
            </div>

            {/* Total Expenses */}
            <div className='total-expenses'>
              <h4>Total Expenses</h4>
              <div className="amount">
                {/* Display the total expenses */}
                {totalExpenses}
              </div>
            </div>
          </div>

          {/* Balance */}
          <div className='balance'>
            <div className='total-balance'>
              <h4>Total Balance</h4>
              <div className="amount">
                {/* Display calculated total balance */}
                {(incomeValue - (percentageLeft * incomeValue)) - totalExpenses}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right section of the dashboard */}
      {/* <div className='r-dashboard'> */}
        {/* Placeholder for the content of the right section */}
      {/* </div> */}
    </div>
  );
};

