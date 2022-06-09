import styled, { keyframes } from "styled-components";

export const slideToLeft = keyframes`
  from{
    transform:translateX(100px);
    opacity:0;
  }
  to{
    transform:translateX(0px);
    opacity:1;
  }
`;
export const InputErros = styled.p`
  font-size: 10px;
  color: red;
`;
export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${slideToLeft} 1s ease-in-out;
  /* align-items: center; */
`;
export const ContainerInput = styled.div`
  position: relative;
`;
