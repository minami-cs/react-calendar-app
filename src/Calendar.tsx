import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalendarBody from './components/CalendarBody';
import CalendarHeader from './components/CalendarHeader';

interface DatesType {
  prevMonth?: number[];
  thisMonth?: number[];
  nextMonth?: number[];
}

export default function Calendar() {
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [dates, setDates] = useState<DatesType>({});

  const getThisMonthDates = () => {
    const DATE: Date = new Date();
    return DATE;
  };

  const goToPrevMonth = () => {
    if (month <= 12) setMonth(month - 1);
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    }
  };

  const goToNextMonth = () => {
    if (month < 12) setMonth(month + 1);
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    }
  };

  const getCalendarDates = (year: number, month: number) => {
    const PREVLASTDATE: Date = new Date(year, month, 0);
    const THISLASTDATE: Date = new Date(year, month + 1, 0);
    const PREVLASTWEEKDAY = PREVLASTDATE.getDay();
    const THISLASTWEEKDAY = THISLASTDATE.getDay();
    const PREVLAST = PREVLASTDATE.getDate();
    const THISLAST = THISLASTDATE.getDate();
    const PREVMONTH: number[] = [];
    const THISMONTH: number[] = [];
    const NEXTMONTH: number[] = [];

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
    const DATE = getThisMonthDates();
    const YEAR = DATE.getFullYear();
    const MONTH = DATE.getMonth();
    setYear(YEAR);
    setMonth(MONTH + 1);
  }, []);

  useEffect(() => {
    const DATES = getCalendarDates(year, month);
    setDates(DATES);
  }, [year, month]);

  return (
    <Wrapper>
      <CalendarHeader
        year={year}
        month={month}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
      />
      <CalendarBody
        prevDates={dates.prevMonth}
        thisDates={dates.thisMonth}
        nextDates={dates.nextMonth}
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
