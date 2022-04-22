import React from 'react';
import styled from 'styled-components';
import NotThisMonthDate from './NotThisMonthDate';
import ThisMonthDate from './ThisMonthDate';
import Weekday from './Weekday';

export default function CalendarBody({ prevDates, thisDates, nextDates }) {
  const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

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
                return <ThisMonthDate key={thisDate} date={thisDate} />;
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

const Body = styled.section`
  padding-top: 20px;
`;

const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Dates = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
