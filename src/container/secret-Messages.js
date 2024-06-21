import styled from "styled-components";

export const ContainerFather = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f0f8;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1150px;
  height: 800px;
  border: 2px solid #5e5c8e;
  border-radius: 15px 15px 0 0;
  background-color: #fdf9fe;
  margin: 0 auto;

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

  section {
    display: flex;
    height: 88%;
    align-items: center;
    justify-content: center;
  }
`;

export const Img = styled.img``;

export const ContainerUser = styled.div`
  width: 550px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  background: #fff;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.23),
    0px 3px 6px 0px rgba(0, 0, 0, 0.16);

  @media (max-width: 1830px) {
    width: 500px;
    height: 420px;
  }

  @media (max-width: 500px) {
    width: 380px;
    height: 450px;
  }
  @media (max-width: 390px) {
    width: 330px;
    height: 400px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #212529;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;

    @media (max-width: 1830px) {
      font-size: 25px;
    }

    @media (max-width: 500px) {
      font-size: 20px;
    }

    @media (max-width: 390px) {
      font-size: 15px;
      line-height: 20px;
    }
  }

  h2 {
    margin-top: 10px;
    color: #6c757d;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    text-align: center;

    @media (max-width: 1830px) {
      font-size: 15px;
    }

    @media (max-width: 500px) {
      font-size: 13px;
      max-width: 350px;
    }
    @media (max-width: 390px) {
      font-size: 11px;
      max-width: 300px;
    }
  }
  .trace {
    width: 470px;
    height: 1px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    @media (max-width: 390px) {
      width: 270px;
    }
  }

  .about-information {
    color: #5e5c8e;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;

    @media (max-width: 1830px) {
      font-size: 13px;
      margin-top: 10px;
    }

    @media (max-width: 500px) {
      max-width: 350px;
    }

    @media (max-width: 390px) {
      font-size: 11px;
    }
  }
  .allow-notification {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 1830px) {
      font-size: 13px;
    }
  }
`;

export const IputsTexts = styled.form`
  margin-top: 34px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    align-items: center;
  }
  h2 {
    color: #212529;
    font-size: 20px;
    line-height: 24px;

    @media (max-width: 1830px) {
      font-size: 15px;
    }

    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
  .input-nickName {
    margin-top: 5px;
    width: 378px;
    height: 36px;
    padding: 5px 12px 6px 12px;
    border: 2px solid #80bdff;
    box-shadow: 0px 0px 0px 3.2px rgba(0, 123, 255, 0.25);
    transition: border 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 500px) {
      width: 300px;
    }

    &:hover {
      border: 2px solid #007bff; /* Altere a cor do border ao passar o mouse */
      box-shadow: 0px 0px 0px 6px rgba(0, 123, 255, 0.25); /* Ajuste os valores do box-shadow ao passar o mouse */
    }
  }
  .btn {
    margin-top: 20px;
    width: 384px;
    height: 38px;
    padding: 7px 117.578px 8px 118px;
    justify-content: center;
    align-items: center;
    background-color: #5e5c8e;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;

    @media (max-width: 500px) {
      width: 300px;
      font-size: 13px;
      padding: 0;
    }
  }
`;

export const InputCheckBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 10px;
  text-align: center;
  label {
    color: #212529;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    line-height: 18px;
    width: 328px;
    @media (max-width: 500px) {
      max-width: 300px;
    }
  }
`;
