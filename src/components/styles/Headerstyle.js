import { styled } from "styled-components";

export const HeaderStyle = styled.div`
  padding-top: 50px;
  background: linear-gradient(264.47deg, #2e43f0 29.39%, #6677ff 93.49%);
  width: 100%;
  min-height: 820px;
  display: flex;
  flex-direction: column;
  row-gap: 47px;
`;

export const UpperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 233px;

  @media (max-width: 1315px) {
    justify-content: center;
    padding: 0px 200px;
    column-gap: 50px;
  }

  @media (max-width: 904px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
  }
  ul {
    display: flex;
    flex-direction: row;
    column-gap: 28px;
    @media (max-width: 640px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }

  li {
    list-style: none;

    @media (max-width: 640px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    color: white;
  }
`;

export const Logo = styled.img``;
export const HeaderRight = styled.img`
  @media (max-width: 836px) {
    width: 100%;
  }
`;

export const HeaderLower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 70px 0px 233px;
  column-gap: 21px;

  span {
    color: #ffffff;
  }

  @media (max-width: 1315px) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 0px 70px 0px 70px;
  }
`;

export const HeaderRightStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 383px;

  @media (max-width: 1315px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderRightButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 44px;
`;

export const Span1 = styled.span`
  font-size: 20px;
  color: white;
  @media (max-width: 600px) {
    font-size: 15px;
    text-align: center;

  }
`;

export const Span2 = styled.span`
  font-size: 50px;
  font-weight: 500;
  color: white;

  @media (max-width: 1400px) {
    font-size: 35px;
 
  }

  
  @media (max-width: 904px) {
    font-size: 30px;
    text-align: center;

  }

  @media (max-width: 600px) {
    font-size: 20px;
    text-align: center;

  }
`;

export const Span3 = styled.span`
  font-size: 16px;
  color: white;

  @media (max-width: 600px) {
    font-size: 15px;
    text-align: center;

  }
`;
