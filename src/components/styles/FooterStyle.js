import { styled } from "styled-components";

export const FooterStyle = styled.div`
  background-color: #000848;
  /* min-height: 432px; */
  display: flex;
  justify-content: space-between;
  padding: 113px 233px;
  flex-wrap: wrap;
  @media (max-width: 1230px) {
    padding: 113px 50px;
    justify-content: center;
 
  }

  @media (max-width: 870px) {
    padding: 113px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
  }
  

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media (max-width: 1230px) {
    padding-top: 10px;
    justify-content: center;
    /* padding: 0px; */
 
  }

  @media (max-width: 870px) {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

 
  }
 
  }

  li,
  a {
    list-style: none;
    color: white;
    text-decoration: none;
    &:hover {
    opacity: 0.9;
 
  }
  }
  
`;

export const Logo = styled.img`
  /* background: rgba(255, 255, 255, 0.29); */
  border-radius: 50%;
  padding: 10px;

  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgba(255, 255, 255, 0.29)"};
  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};
`;

export const Social = styled.div`
  display: flex;
  column-gap: 15px;
 
`;
