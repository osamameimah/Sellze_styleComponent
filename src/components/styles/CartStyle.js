import { styled } from "styled-components";

export const CartStyle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  padding-bottom: 100px;
  /* padding-top: 121px; */
  justify-content: center;
  padding-left: 220px;
  padding-right: 220px;
  flex-wrap: wrap;
  row-gap: 20x;

  @media (max-width: 1230px) {
    display: flex;
  flex-direction: row;
  column-gap: 15px;
  padding-bottom: 50px;
   justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
  flex-wrap: wrap;
  row-gap: 15x;
 
  }
`;

export const CartItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 38px;
  /* background-color: #4252cf; */
  max-width: 358px;
  max-height: 265px;
  border-radius: 10px;
  border: 2px solid rgba(66, 82, 207, 0.1);
  &:hover {
    background-color: #4252cf;
    border: none;
    color: white;
   }

   @media (max-width: 1230px) {
width: 100%;
height: 100%;

  }

`;

export const Span1 = styled.span`
   font-size: 20px;
   @media (max-width: 1230px) {
 
    font-size: 17px;

  }
`;

export const Span2 = styled.span`
   font-size: 16px;
  line-height: 160%;
  @media (max-width: 1230px) {
 
 font-size: 14px;

}
`;

export const Icon = styled.img``;
