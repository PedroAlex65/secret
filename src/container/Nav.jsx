// Nav.jsx
import { Header, Item } from "./nav.js";
import LogoSecret from "../assets/logo-secret.svg";

function Nav() {
  return (
    <Header>
      <Item>
        <img className="image-Logo" src={LogoSecret} alt="" />
        <div className="container-img"></div>
      </Item>
    </Header>
  );
}

export default Nav;
