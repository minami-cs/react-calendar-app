import styled from 'styled-components';

export default function ThisMonthDate({ date }) {
  return <Date>{date}</Date>;
}

const Date = styled.div`
  height: 180px;
  padding-top: 8px;

  &:nth-child(7n + 1) {
    color: ${({ theme }) => theme.sundayColor};
  }

  &:not(:nth-child(7n)) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
`;
