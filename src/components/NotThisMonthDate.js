import styled from 'styled-components';

export default function NotThisMonthDate({ date }) {
  return <Date>{date}</Date>;
}

const Date = styled.div`
  height: 180px;
  padding-top: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.notThisMonthColor};

  &:nth-child(7n + 1) {
    color: rgba(251, 45, 8, 0.3);
  }

  &:not(:nth-child(7n)) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }
`;
