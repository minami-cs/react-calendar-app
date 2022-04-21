import React from 'react';
import CalendarBody from './components/CalendarBody';
import CalendarHeader from './components/CalendarHeader';
import './App.css';

function App() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return (
    <div className="wrapper">
      <main className="content">
        <CalendarHeader year={year} month={month} />
        <CalendarBody />
      </main>
    </div>
  );
}

export default App;
