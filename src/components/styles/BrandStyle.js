import { styled } from "styled-components";

export const BrandStyle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  padding-bottom: 100px;
  padding-top: 121px;
  justify-content: space-between;
  padding-left: 232px;
  padding-right: 232px;
  flex-wrap: wrap;
  row-gap: 41px;

  @media (max-width: 870px) {
    padding-left: 100px;
    padding-right: 100px;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    row-gap: 15px;
    padding-bottom: 5px;



  }

`;

export const Brandd = styled.img`
padding: 17px 52px;

@media (max-width: 870px) {
  padding: 10px 30px;



  }
`;
