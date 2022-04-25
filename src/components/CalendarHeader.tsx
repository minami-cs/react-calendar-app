import styled from 'styled-components';

type HeaderType = {
  year: number;
  month: number;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
};

export default function CalendarHeader({
  year,
  month,
  goToPrevMonth,
  goToNextMonth,
}: HeaderType) {
  return (
    <Header>
      <Nav>
        <MoveMonthButton onClick={goToPrevMonth}>
          <MovePrevMonthImage src="./images/right-arrow.png" />
        </MoveMonthButton>
        <ThisMonth>{month}</ThisMonth>
        <ThisYear>/{year}</ThisYear>
        <MoveMonthButton onClick={goToNextMonth}>
          <MoveNextMonthImage src="./images/right-arrow.png" />
        </MoveMonthButton>
      </Nav>
    </Header>
  );
}

const Header = styled.section`
  padding-top: 10px;
`;

const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: center;
`;

const MoveMonthButton = styled.button`
  width: 50px;
  height: 50px;
  &:hover {
    filter: opacity(0.4) drop-shadow(0 0 0 #0580f3);
  }
`;

const MovePrevMonthImage = styled.img`
  width: 18px;
  transform: rotate(180deg);
`;

const MoveNextMonthImage = styled.img`
  width: 18px;
`;

const ThisMonth = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  padding-left: 50px;
`;

const ThisYear = styled.h2`
  font-size: 1.1rem;
  padding-left: 8px;
  line-height: 3;
`;
