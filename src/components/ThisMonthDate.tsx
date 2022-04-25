import { useState } from 'react';
import styled from 'styled-components';
import { WEEKDAY, DayType } from '../utils/week';
import Modal from './Modal';

type ThisMonthDateType = {
  year: number;
  month: number;
  date: number;
};

export default function ThisMonthDate({
  year,
  month,
  date,
}: ThisMonthDateType) {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const [tempSchedule, setTempSchedule] = useState('');
  const [schedule, setSchedule] = useState('');
  const [day, setDay] = useState<DayType>('' as DayType);

  const getThisDay = (year: number, month: number, date: number) => {
    const DATE: Date = new Date(year, month - 1, date);
    const DAY = DATE.getDay();
    setDay(WEEKDAY[DAY] as DayType);
  };

  const toggleModal = (year: number, month: number, date: number) => {
    getThisDay(year, month, date);
    setIsOpen(!isOpen);
    setSchedule(tempSchedule);
  };
  // 입력값 debounce 처리하기
  const getNewSchedule = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) clearTimeout(timer);
    const newTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setTempSchedule(e.target.value);
    }, 500);
    setTimer(newTimer);
  };

  return (
    <>
      {isOpen && (
        <Modal
          year={year}
          month={month}
          date={date}
          day={day}
          toggleModal={toggleModal}
          getNewSchedule={getNewSchedule}
        />
      )}
      <DateWrapper onClick={() => toggleModal(year, month, date)}>
        {date}
        <Schedules>{schedule && <Schedule>{schedule}</Schedule>}</Schedules>
      </DateWrapper>
    </>
  );
}

const DateWrapper = styled.div`
  height: 180px;
  padding-top: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:nth-child(7n + 1) {
    color: ${({ theme }) => theme.sundayColor};
  }

  &:not(:nth-child(7n)) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }

  &:hover {
    cursor: pointer;
  }
`;

const Schedules = styled.ul`
  padding: 8px 5px;
`;

const Schedule = styled.li`
  height: 20px;
  border-radius: 5px;
  background-color: #e30747;
  font-size: 0.9rem;
  line-height: 1.3;
  color: #fff;
`;
