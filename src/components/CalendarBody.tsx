import { useState } from 'react';
import styled from 'styled-components';
import Weekday from './Weekday';
import NotThisMonthDate from './NotThisMonthDate';
import ThisMonthDate from './ThisMonthDate';

type BodyType = {
  prevDates?: number[];
  thisDates?: number[];
  nextDates?: number[];
  year: number;
  month: number;
};

const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'] as const;

type DayType = keyof typeof WEEKDAY;

export default function CalendarBody({
  prevDates,
  thisDates,
  nextDates,
  year,
  month,
}: BodyType) {
  const WEEK: string[] = ['일', '월', '화', '수', '목', '금', '토'];
  const [day, setDay] = useState<DayType>('' as DayType);

  const getThisDay = (year: number, month: number, date: number) => {
    const DATE: Date = new Date(year, month - 1, date);
    const DAY = DATE.getDay();
    setDay(WEEK[DAY] as DayType);
  };

  return (
    <Body>
      <Weekdays>
        {WEEK.map((day, idx) => {
          return <Weekday day={day} key={idx} />;
        })}
      </Weekdays>
      <Dates>
        {prevDates &&
          (prevDates.length > 0
            ? prevDates.map(prevDate => {
                return <NotThisMonthDate key={prevDate} date={prevDate} />;
              })
            : null)}
        {thisDates &&
          (thisDates.length > 0
            ? thisDates.map(thisDate => {
                return (
                  <ThisMonthDate
                    key={thisDate}
                    year={year}
                    month={month}
                    date={thisDate}
                    day={day}
                    getThisDay={getThisDay}
                  />
                );
              })
            : null)}
        {nextDates &&
          (nextDates.length > 0
            ? nextDates.map(nextDate => {
                return <NotThisMonthDate key={nextDate} date={nextDate} />;
              })
            : null)}
      </Dates>
    </Body>
  );
}

const Body = styled.main`
  padding-top: 16px;
`;

const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Dates = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
