import styled from "styled-components";

export const Father = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1150px;
  height: 800px;
  border: 2px solid #5e5c8e;
  border-radius: 15px 15px 0 0;

  @media (max-width: 1800px) {
    width: 1050px;
    height: 650px;
  }
  @media (max-width: 1280px) {
    width: 900px;
    height: 700px;
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
    height: 400px;
  }
  @media (max-width: 394px) {
    width: 380px;
    height: 370px;
  }
  @media (max-width: 370px) {
    width: 350px;
  }
`;

export const MessagesMsg = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 718px;
  height: 500px;

  @media (max-width: 960px) {
    width: 890px;
  }
  @media (max-width: 885px) {
    width: 690px;
  }

  @media (max-width: 500px) {
    width: 400px;
    max-height: 320px;
  }

  @media (max-width: 390px) {
    width: 390px;

  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 23px;
    overflow-y: auto;
    max-height: 690px;
    align-items: center;

    @media (max-width: 1800px) {
      width: 1050px;
    }

    @media (max-width: 1280px) {
      max-height: 590px;
      width: 900px;
    }
    @media (max-width: 960px) {
      width: 680px;
      max-height: 590px;
    }
    @media (max-width: 390px) {
      width: 390px;
    }
    @media (max-width: 500px) {
      width: 395px;
      max-height: 320px;
    }

    @media (max-width: 390px) {
      width: 380px;
    }
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 700px;
    border-radius: 20px;
    background-color: #86a0ff;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    min-height: 80px; /* Altura mínima para cada li */
    position: relative; /* Permite posicionamento relativo */

    @media (max-width: 1800px) {
      width: 850px;
    }

    @media (max-width: 960px) {
      width: 700px;
    }

    @media (max-width: 885px) {
      width: 550px;
    }

    @media (max-width: 500px) {
      width: 350px;
      font-size: 15px;
      min-height: 60px; /* Altura mínima para cada li */
    }

    img {
      cursor: pointer;

      @media (max-width: 500px) {
        width: 30px;
        height: 30px;
      }
    }

    &::before {
      content: "";
      position: absolute;
      right: 65px; /* Ajuste para deixar um espaço de 10px à esquerda da li */
      top: 0;
      bottom: 0;
      width: 2px; /* Largura da barra lateral */
      background-color: #fff; /* Cor da barra lateral */
    }
  }
`;
