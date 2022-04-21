import React from 'react';
import Weekday from './Weekday';

export default function CalendarBody() {
  const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <section className="calendarBody">
      <div className="weekdays">
        {WEEK.map((day, idx) => {
          return <Weekday day={day} key={idx} />;
        })}
      </div>
      <div className="days"></div>
    </section>
  );
}
