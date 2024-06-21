import { useEffect, useState } from "react";
import ImgMessagem from "../assets/mensagem.png";
import Copy from "../assets/copy.svg";
import { Container, Father, MessagesMsg } from "./messages";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBox from "../components/NavBox.jsx";
const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  const parametro = useParams();
  const getMessages = async () => {
    try {
      const res = await axios.get("http://localhost:8000/message");

      setMessages(res.data.sort((a, b) => (a.messages > b.messages ? 1 : -1)));
    } catch (error) {
      return "";
    }
  };

  useEffect(() => {
    getMessages();

    if (!localStorage.getItem("id")) {
      navigate("/");
    }
  }, []);

  const notify = () => toast("Mensagem Copiada");

  const idUrl = Number(parametro.idUser);

  return (
    <Father className="container">
      <Container className="conteudos">
        <NavBox props={ImgMessagem} text="Mensagens" />

        <MessagesMsg className="segura">
          <ul>
            {messages
              .filter((item) => {
                return item.user_id == idUrl;
              })
              .map((item, i) => {
                return (
                  <li onClick={notify} key={i}>
                    {item.message} <img src={Copy} alt="" />
                  </li>
                );
              })}
          </ul>
        </MessagesMsg>
      </Container>
      <ToastContainer />
    </Father>
  );
};

export default Messages;
