import { styled } from "styled-components";

export const OfferStyle = styled.div`
  background-color: #fdeee7;
  /* width: 100%; */
  min-height: 405px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  row-gap: 35px;
  padding: 100px 233px;

  @media (max-width: 1230px) {
    padding-top: 10px;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
  }

  @media (max-width: 870px) {
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    row-gap: 20px;

  }
`;

export const Span1 = styled.div`
  font-size: 20px;
  color: #ff5a05;
  font-weight: bold;
  @media (max-width: 1230px) {
    font-size: 16px;
  }
`;

export const Span2 = styled.div`
  font-size: 39px;
  color: #05000b;
  text-align: center;
  @media (max-width: 1230px) {
    font-size: 25px;
  }
`;

export const Input = styled.input`
  padding: 15px 30px;
  outline: none;
  border: none;
  background-color: transparent;
  border: 1px solid #a9a9a9;
  border-right: 0px;
   
  @media (max-width: 1000px) {
    padding: 10px 25px;
 

  }
`;
