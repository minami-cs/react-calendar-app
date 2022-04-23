import styled from 'styled-components';

type HeaderType = {
  year: number;
  month: number;
};

export default function CalendarHeader({ year, month }: HeaderType) {
  return (
    <Header>
      <Nav>
        <ThisMonth>{month}</ThisMonth>
        <ThisYear>/{year}</ThisYear>
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
