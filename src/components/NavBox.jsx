import {  Header, Img } from "./navBox.js";

const NavBox = ({props,text}) => {
  return (
    <Header className="conteudos-header">
      <Img src={props} alt="" />
      <h2>{text}</h2>
    </Header>
  );
};

export default NavBox;
