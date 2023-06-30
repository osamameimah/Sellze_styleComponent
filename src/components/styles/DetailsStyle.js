import { styled } from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 75px;
  padding-bottom: 100px;
  padding-top: 50px;
  justify-content: space-between;
  padding-left: 232px;
  padding-right: 232px;
  row-gap: 41px;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 50px;
    padding-bottom: 1px;
    text-align: center;
  }
`;

export const Man = styled.img`
  display: flex;
  flex: 1;
  max-width: 515px;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const DetailsRightStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  max-width: 530px;
  flex: 1;
`;

export const Span1 = styled.span`
  font-size: 20px;
  color: #ff5a05;
  @media (max-width: 850px) {
    font-size: 15px;
    text-align: center;
  }
`;

export const Span2 = styled.span`
  font-size: 50px;
  font-weight: 500;
  color: #05000b;

  @media (max-width: 1400px) {
    font-size: 35px;
 
  }

  @media (max-width: 850px) {
    font-size: 25px;
    text-align: center;
  }
`;

export const Span3 = styled.span`
  font-size: 16px;
  color: #05000b;
  @media (max-width: 850px) {
    font-size: 14px;
    text-align: center;
  }
`;
