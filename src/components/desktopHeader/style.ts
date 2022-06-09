import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid lightblue;
  border-radius: 15px;
  box-shadow: 0px -13px 27px 9px lightblue;
  width: 100%;
  max-width: 1200px;
  .links {
    flex-grow: 1;
    justify-content: space-around;

    .description {
      display: flex;
      flex-direction: column;
      span {
        margin: 5px;
        color: #f2a167;
        font-size: 12px;
        cursor: pointer;
      }
      h2 {
        margin: 0px;
        font-size: 15px;
      }
      p {
        margin: 0px;
        font-size: 10px;
      }
    }
  }
  figure:hover {
    cursor: pointer;
  }
  figure {
    img {
      width: 615px;
    }
  }
  div {
    display: none;
    @media (min-width: 760px) {
      display: flex;
      /* justify-content: space-evenly; */
      align-items: center;
    }
    a {
      margin: 25px;
      text-decoration: none;
      color: #f2a167;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }
  @media screen and (min-width: 1020px) {
    div a {
      font-size: 25px;
    }
    .links {
      .description {
        span {
          font-size: 15px;
        }
        h2 {
          margin: 0px;
          font-size: 20px;
        }
        p {
          margin: 0px;
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (max-width: 975px) {
    div a {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 16px;
    }
    justify-content: center;
  }

  @media screen and (max-width: 460px) {
    width: 310px;
    figure img {
      width: 250px;
    }
  }
  .links img {
    width: 60px;
    height: 40px;
    cursor: pointer;
  }
`;
