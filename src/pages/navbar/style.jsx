import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Style = styled.div`
  height: 80px;
  width: 100%;
  background: ${theme.glasess};
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  top: 0;
  z-index: 5;
  transition: 0.3s;
  border-bottom: 1px solid #1e1e1e;
  div {
    .logo {
      height: 70px;
      width: 70px;
      background: url(${require("../../assets/logo.jpg")});
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 10px;
    }
    h3 {
      margin: 0 10px;
      color: ${theme.element};
    }
  }
  .route {
    justify-content: center;
    align-items: center;
    a {
      margin: 0 5px;
      text-decoration: none;
      color: ${theme.color};
      cursor: pointer;
      padding: 10px;
      border-radius: 10px;
      transition: 0.5s;
    }
    .active {
      background: ${theme.form_back};
    }
  }
  .link {
    color: ${theme.color};
    font-size: 30px;
    margin: 0 20px;
    transition: 0.3s;
    &:hover {
      text-shadow: 0 0 10px;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 650px) {
    height: 100vh;
    width: 100%;
    left: ${(prop) => (prop.data === true ? "-100%" : "0%")};
    flex-wrap: wrap;
    div {
      width: 100%;
    }
  }
`;
