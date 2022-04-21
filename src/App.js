import React, { useEffect, useState } from 'react';
import CalendarBody from './components/CalendarBody';
import CalendarHeader from './components/CalendarHeader';
import './App.css';

function App() {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  const getDate = () => {
    return new Date();
  };

  useEffect(() => {
    const DATE = getDate();
    const YEAR = DATE.getFullYear();
    const MONTH = DATE.getMonth() + 1;
    setYear(YEAR);
    setMonth(MONTH);
  }, []);

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
