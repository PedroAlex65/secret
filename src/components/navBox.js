import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #5e5c8e;
  border-radius: 10px 10px 0 0;
  height: 70px;
  @media (max-width: 500px) {
  height: 50px;
  }

  h2 {
    margin-top: 6px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;
