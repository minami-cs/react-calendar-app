import styled from 'styled-components';

export default function Weekday({ day }) {
  return <Day>{day}</Day>;
}

const Day = styled.div`
  height: 30px;

  &:first-child {
    color: ${({ theme }) => theme.sundayColor};
  }
`;
