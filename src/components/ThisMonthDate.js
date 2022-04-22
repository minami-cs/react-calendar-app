import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

export default function ThisMonthDate({ year, month, date, day, getThisDay }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState();
  const [tempSchedule, setTempSchedule] = useState('');
  const [schedule, setSchedule] = useState('');

  const toggleModal = (year, month, date) => {
    getThisDay(year, month, date);
    setIsOpen(!isOpen);
    setSchedule(tempSchedule);
  };

  // 입력값 debounce 처리하기
  const getNewSchedule = e => {
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setTempSchedule(e.target.value);
    }, 500);
    setTimer(newTimer);
  };

  return (
    <>
      {isOpen && (
        <Modal
          toggleModal={toggleModal}
          month={month}
          date={date}
          day={day}
          getNewSchedule={getNewSchedule}
        />
      )}
      <Date onClick={() => toggleModal(year, month, date)}>
        {date}
        <Schedules>{schedule && <Schedule>{schedule}</Schedule>}</Schedules>
      </Date>
    </>
  );
}

const Date = styled.div`
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
