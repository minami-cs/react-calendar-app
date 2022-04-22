import React from 'react';
import Date from './Date';
import Weekday from './Weekday';

export default function CalendarBody({ prevDates, thisDates, nextDates }) {
  const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <section className="calendarBody">
      <div className="weekdays">
        {WEEK.map((day, idx) => {
          return <Weekday day={day} key={idx} />;
        })}
      </div>
      <div className="dates">
        {prevDates &&
          (prevDates.length > 0
            ? prevDates.map(prevDate => {
                return <Date key={prevDate} date={prevDate} />;
              })
            : null)}
        {thisDates &&
          (thisDates.length > 0
            ? thisDates.map(thisDate => {
                return <Date key={thisDate} date={thisDate} />;
              })
            : null)}
        {nextDates &&
          (nextDates.length > 0
            ? nextDates.map(nextDate => {
                return <Date key={nextDate} date={nextDate} />;
              })
            : null)}
      </div>
    </section>
  );
}
