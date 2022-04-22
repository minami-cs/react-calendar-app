import styled from 'styled-components';

export default function Weekday({ day }) {
  return <Day>{day}</Day>;
}

const Day = styled.div`
  height: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:first-child {
    color: ${({ theme }) => theme.sundayColor};
  }
`;
