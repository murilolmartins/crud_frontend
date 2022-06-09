import styled, { keyframes } from "styled-components";
export const slideToRight = keyframes`
  from{
    transform:translateX(-100px);
    opacity:0;
  }
  to{
    transform:translateX(0px);
    opacity:1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  max-width: 1200px;
  .background_img {
    display: none;
    width: 50%;
    animation: ${slideToRight} 1s ease-in-out;
    @media (min-width: 1100px) {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 500px;
        padding-left: 50px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: 1100px) {
    width: 50%;
  }
`;
