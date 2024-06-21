import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Enviar from "../assets/enviar.png";
// import "./leaveMessage.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Container,
  FieldArea,
  FieldMessage,
  SegurarField,
  TextArea,
} from "./leaveMessage";
import ImgEnviar from "../assets/enviar1.png";

import NavBox from "../components/NavBox.jsx";

const LeaveMessage = () => {
  const params = useParams();

  const [valueTextArea, setValueTextArea] = useState("");

  const idUrl = params.idUser;
  

  const handleBtn = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/message", {
        user_id: idUrl,
        message: valueTextArea,
      })
      .then((res) => {
        setValueTextArea("");
        toast("Mensagem Enviada");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container className="container">
      <FieldMessage className="fieldMessage">
        <NavBox props={Enviar} text="Deixe sua Mensagem" />
        <SegurarField className="segurar-field">
          <FieldArea className="field-text">
            <TextArea
              onChange={({ target }) => setValueTextArea(target.value)}
              value={valueTextArea}
              name="text"
              id="text"
              cols="none"
              rows="none"
              placeholder="Digite Algo..."
            />
            <div className="btn-enviar">
              <Button onClick={handleBtn}>
                <img src={ImgEnviar} alt="" />
              </Button>
            </div>
          </FieldArea>
        </SegurarField>
      </FieldMessage>
      <ToastContainer />
    </Container>
  );
};

export default LeaveMessage;
