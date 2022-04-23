import styled from 'styled-components';
import Weekday from './Weekday';
import NotThisMonthDate from './NotThisMonthDate';
import ThisMonthDate from './ThisMonthDate';
import { WEEKDAY } from '../utils/week';

type BodyType = {
  prevDates?: number[];
  thisDates?: number[];
  nextDates?: number[];
  year: number;
  month: number;
};

export default function CalendarBody({
  prevDates,
  thisDates,
  nextDates,
  year,
  month,
}: BodyType) {
  return (
    <Body>
      <Weekdays>
        {WEEKDAY.map((day, idx) => {
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
