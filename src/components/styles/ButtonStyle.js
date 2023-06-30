import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  padding: 15px 30px;
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  color: ${({ color }) => color || "white"};
  border: ${({ border }) => border || "none"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#ff5a05"};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    
  }

  @media (max-width: 1000px) {
    padding: 10px 25px;
 

  }
`;
