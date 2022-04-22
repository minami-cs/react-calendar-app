import styled from 'styled-components';

export default function NotThisMonthDate({ date }) {
  return <Date>{date}</Date>;
}

const Date = styled.div`
  height: 180px;
  color: ${({ theme }) => theme.notThisMonthColor};
`;
