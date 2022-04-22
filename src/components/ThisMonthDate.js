import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

export default function ThisMonthDate({ year, month, date, day, getThisDay }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (year, month, date) => {
    getThisDay(year, month, date);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <Modal toggleModal={toggleModal} month={month} date={date} day={day} />
      )}
      <Date onClick={() => toggleModal(year, month, date)}>{date}</Date>
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
