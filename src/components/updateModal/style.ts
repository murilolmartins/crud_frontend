import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  .opacity {
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed;
  }
`;

export const Container = styled.div`
  position: relative;
  background-color: white;
  padding: 10px 10px 20px 10px;
  border-radius: 10px;
  .userData {
    h2 {
      margin: 0px 0px 20px 0px;
      font-size: 20px;
      text-align: center;
      span {
        margin-left: 10px;
        color: #eecf5f;
      }
    }
  }
  header {
    display: flex;
    justify-content: center;
    svg {
      align-self: center;
      margin-left: 100px;
      cursor: pointer;
    }

    h1 {
      text-align: center;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    input {
      width: 270px;
      margin: 0px 10px 10px 10px;
    }
    button {
      margin-top: 10px;
    }
  }
`;

export const Hide = styled.input`
  display: none;
`;
