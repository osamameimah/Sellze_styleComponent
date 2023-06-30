import { styled } from "styled-components";

export const CounterStyle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  padding-bottom: 100px;
  justify-content: center;
  padding-left: 220px;
  padding-right: 220px;
  flex-wrap: wrap;

  @media (max-width: 1230px) {
    padding-left: 100px;
    padding-right: 100px;
    row-gap: 15x;
    padding-bottom: 50px;

  }
`;

export const NavCounterStyle = styled.div`
  padding: 30px 59px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  @media (max-width: 1230px) {
    padding:10px 45px;
    row-gap: 15x;
 
  }
`;

export const Span1 = styled.span`
  color: #1f37ff;
  font-size: 55px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 1230px) {
    font-size: 30px;

  }
`;

export const Span2 = styled.span`
  color: #05000b;
  font-size: 20px;
  text-align: center;
  @media (max-width: 1230px) {
    font-size: 15px;

  }
`;
