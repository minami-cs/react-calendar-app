import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalendarBody from './components/CalendarBody';
import CalendarHeader from './components/CalendarHeader';

export default function Calendar() {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [dates, setDates] = useState({});

  const getCalendarDates = () => {
    const DATE = new Date();
    const YEAR = DATE.getFullYear();
    const MONTH = DATE.getMonth();
    const PREVLASTDATE = new Date(YEAR, MONTH, 0);
    const THISLASTDATE = new Date(YEAR, MONTH + 1, 0);
    const PREVLASTWEEKDAY = PREVLASTDATE.getDay();
    const THISLASTWEEKDAY = THISLASTDATE.getDay();
    const PREVLAST = PREVLASTDATE.getDate();
    const THISLAST = THISLASTDATE.getDate();
    const PREVMONTH = [];
    const THISMONTH = [];
    const NEXTMONTH = [];

    if (PREVLASTWEEKDAY < 6) {
      for (let i = PREVLASTWEEKDAY; i >= 0; i--) {
        PREVMONTH.push(PREVLAST - i);
      }
    }
    for (let i = 1; i <= THISLAST; i++) {
      THISMONTH.push(i);
    }
    if (THISLASTWEEKDAY < 6) {
      for (let i = 1; i <= 6 - THISLASTWEEKDAY; i++) {
        NEXTMONTH.push(i);
      }
    }
    return { prevMonth: PREVMONTH, thisMonth: THISMONTH, nextMonth: NEXTMONTH };
  };

  useEffect(() => {
    const DATES = getCalendarDates();
    const DATE = new Date();
    const YEAR = DATE.getFullYear();
    const MONTH = DATE.getMonth();
    setYear(YEAR);
    setMonth(MONTH + 1);
    setDates(DATES);
  }, []);

  return (
    <Wrapper>
      <CalendarHeader year={year} month={month} />
      <CalendarBody
        prevDates={dates.prevMonth}
        thisDates={dates.thisMonth}
        nexDates={dates.nextMonth}
        year={year}
        month={month}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  position: relative;
`;
