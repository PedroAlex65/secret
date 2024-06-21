import styled from "styled-components";

import Instagram from "../assets/instagram.png";

export const Container_Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 1150px;
  height: 800px;
  border: 2px solid #5e5c8e;
  border-radius: 15px 15px 0 0;
  margin: 0 auto;
  background-color: #fdf9fe;

  @media (max-width: 1830px) {
    width: 750px;
    height: 550px;
  }
  @media (max-width: 1280px) {
    width: 800px;
    height: 600px;
  }
  @media (max-width: 885px) {
    width: 700px;
  }
  @media (max-width: 765px) {
    width: 700px;
    height: 700px;
  }

  @media (max-width: 700px) {
    width: 600px;
    height: 600px;
  }
  @media (max-width: 500px) {
    width: 400px;
    height: 600px;
  }
  @media (max-width: 390px) {
    width: 350px;
    height: 500px;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;

  .information-box {
    width: 418px;
    height: 479px;
    border: 1px solid #5e5c8e;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    margin: auto;
    background-color: #fff;

    @media (max-width: 1830px) {
      width: 380px;
      height: 420px;
    }

    @media (max-width: 500px) {
      width: 350px;
      height: 450px;
      gap: 15px;
    }
    @media (max-width: 390px) {
      gap: 8px;
      width: 320px;
      height: 380px;
    }

    h1 {
      color: #000;
      font-size: 15px;
      font-weight: 500;
      max-width: 380px;

      @media (max-width: 1830px) {
        text-align: center;
      }

      @media (max-width: 500px) {
        font-size: 15px;
      }

      @media (max-width: 390px) {
        font-size: 13px;
      }
    }
    input {
      width: 380px;
      height: 40px;
      border: 2px solid #5e5c8e;
      color: #6c757d;
      font-size: 15px;
      font-weight: 500;
      text-align: center;

      @media (max-width: 1830px) {
        width: 350px;
      }

      @media (max-width: 500px) {
        width: 280px;
        height: 40px;
        font-size: 13px;
      }
    }
    button {
      background-repeat: no-repeat;
      background-color: #6c757d;
      border: none;
      width: 310px;
      height: 45px;
      border-radius: 50px;
      text-align: center;
      border: 1px solid #000;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      &:hover {
        opacity: 0.9;
        transition: 0.5s ease;
      }
      &:active {
        scale: 0.9.9;
      }

      @media (max-width: 1830px) {
        width: 280px;
      }

      @media (max-width: 500px) {
        width: 250px;
        height: 45px;
        font-size: 15px;
      }

      @media (max-width: 390px) {
        width: 220px;
        font-size: 13px;
      }
    }

    :root {
      --yellow: #f9dc64;
      --orange: #ff553e;
      --purple: #b5008e;

      --blue: #3023ae;
      --blue-alpha: #3023ae1f;
    }

    .instagram {
      background-image: url(${Instagram});
      background-repeat: no-repeat;
      text-align: center;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 310px;
      height: 45px;
      border-radius: 50px;
      text-align: center;
      background-image: radial-gradient(
        circle at bottom right,
        var(--yellow),
        var(--orange),
        var(--purple)
      );

      @media (max-width: 1830px) {
        width: 280px;
      }

      @media (max-width: 500px) {
        width: 250px;
        height: 45px;
        font-size: 15px;
      }

      @media (max-width: 390px) {
        width: 220px;
        font-size: 13px;
      }
    }

    .whatsapp {
      background-repeat: no-repeat;
      text-align: center;
      background-color: #39e11d;
      width: 380px;
      height: 40px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 310px;
      height: 45px;
      border-radius: 50px;
      text-align: center;

      @media (max-width: 1830px) {
        width: 280px;
      }

      @media (max-width: 500px) {
        width: 250px;
        height: 45px;
        font-size: 15px;
      }

      @media (max-width: 390px) {
        width: 220px;
        font-size: 13px;
      }
    }

    .facebook {
      background-repeat: no-repeat;
      text-align: center;
      background-color: #4950f3;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 310px;
      height: 45px;
      border-radius: 50px;
      text-align: center;

      @media (max-width: 1830px) {
        width: 280px;
      }

      @media (max-width: 500px) {
        width: 250px;
        height: 45px;
        font-size: 15px;
      }

      @media (max-width: 390px) {
        width: 220px;
        font-size: 13px;
      }
    }

    .check {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 310px;
      height: 45px;
      border-radius: 50px;
      background-color: #6c757d;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      border: none;
      cursor: pointer;

      @media (max-width: 1830px) {
        width: 280px;
      }

      @media (max-width: 500px) {
        width: 250px;
        height: 45px;
        font-size: 15px;
      }

      @media (max-width: 390px) {
        width: 220px;
        font-size: 13px;
      }
    }
  }
`;
