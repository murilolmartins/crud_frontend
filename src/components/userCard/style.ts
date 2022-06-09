import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
  border-radius: 10px;
  width: 200px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  header {
    display: flex;
    div {
      svg {
        cursor: pointer;
        margin: 5px;
      }
    }
  }
  div {
    width: 100%;

    p {
      overflow: hidden;
    }
  }
`;
