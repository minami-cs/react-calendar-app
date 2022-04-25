import styled from 'styled-components';

type WeekdayType = {
  day: string;
};

export default function Weekday({ day }: WeekdayType) {
  return <Day>{day}</Day>;
}

const Day = styled.div`
  height: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:first-child {
    color: ${({ theme }) => theme.sundayColor};
  }
`;
