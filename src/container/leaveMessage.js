import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FieldText = styled.div`
  width: 800px;
  height: 320px;
  background-color: #5e5c8e;
`;

export const FieldMessage = styled.div`
  width: 1145px;
  height: 811px;
  border: 1px solid #5e5c8e;
  border-radius: 15px 15px 0 0;
`;

export const SegurarField = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FieldArea = styled.div`
  width: 800px;
  height: 340px;
  background-color: #5e5c8e;
  gap: 15px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #5e5c8e;

  .btn-enviar {
    border-top: 1px solid #5e5c8e;
    position: relative;
    bottom: -90px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;

export const TextArea = styled.textarea`
  width: 678px;
  height: 186px;
  background-color: #86a0ff;
  border: 1px solid #fff;
  resize: none;
  color: #fff;
  font-size: 16px;
  padding: 13px 0 0 30px;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #5e5c8e;
`;

export const Button = styled.button`
  background-color: #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  border: 1px solid #fff;
  align-self: flex-end;
  font-weight: bold;
  margin-right: 60px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
  }
  
  &&:active {
    scale: 0.8;
    transition: 0.1s ease;
  }
`;
