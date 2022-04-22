import styled from 'styled-components';

export default function ThisMonthDate({ date }) {
  return <Date>{date}</Date>;
}

const Date = styled.div`
  height: 180px;
`;