import React from 'react';

export default function CalendarHeader({ year, month }) {
  return (
    <section className="calendarHeader">
      <h1>
        {year}년 {month}월
      </h1>
    </section>
  );
}
