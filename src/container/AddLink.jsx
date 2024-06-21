import { useEffect, useState } from "react";
import { Container, Container_Links } from "./addLink";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate, useParams } from "react-router-dom";
import "./links.css";
//Imagem que eu quero deixarn o NavBox
import Link from "../assets/link.png";
import NavBox from "../components/NavBox.jsx";
function AddLinks() {
  const navigate = useNavigate();
  const parametros = useParams();

  useEffect(() => {
    if (localStorage.getItem("id") !== parametros.idUser) {
      navigate("/");
    }
  }, []);
  const [inputValue, setInputValue] = useState(
    `http://localhost:5173/leaveMessage/${parametros.idUser}`
  );

  function handleBtn() {
    navigate(`/messages/${parametros.idUser}`);
  }

  return (
    <>
      <Container className="">
        <Container_Links>
          <NavBox props={Link} text="Link" />

          <div className="information-box">
            <h1>
              Compartilhe este link com seus amigos e colete Mensagens Anônimas.
            </h1>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              readOnly
            />

            <CopyToClipboard text={inputValue}>
              <button>Clique para Copiar o link</button>
            </CopyToClipboard>
            <a className="instagram">Adicionar ao Instagram</a>

            <a className="whatsapp">Adicionar ao status</a>
            <a className="facebook">Adicionar ao Facebook</a>
            <a target="_blank" onClick={handleBtn} className="check">
              Mensagens recebidas
            </a>
          </div>
        </Container_Links>
      </Container>
    </>
  );
}

export default AddLinks;
