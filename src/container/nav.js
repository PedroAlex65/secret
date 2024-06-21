import styled from "styled-components";

// Nav
export const Header = styled.header`
  padding: 15px;
  background-color: #5e5c8e;
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  max-width: 1980px;
  margin: 0 auto;
  justify-content: space-between;

  .image-Logo {
    width: 147px;
    height: 36px;
  }

  .container-img {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 15px;

    .image-user {
      width: 40px;
      height: 40px;
    }
    h1 {
      font-size: 20px;
      font-weight: bold;
      line-height: 24px;
      margin-right: 45px;
    }
    h2 {
      font-size: 20px;
      font-weight: bold;
      line-height: 24px;
    }
  }
`;
