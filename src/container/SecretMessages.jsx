import {
  ContainerUser,
  Texts,
  IputsTexts,
  InputCheckBox,
  ContainerFather,
  Container,
} from "./secret-Messages";
import User from "../assets/user.png";
import NavBox from "../components/NavBox.jsx";
function SecretMessages({ handleSubmit, userRef }) {
  return (
    <ContainerFather>
      <Container>
        <NavBox props={User} text="Login" />
        <section>
          <ContainerUser>
            <Texts className="texts">
              <h1>
                Mensagens Secretas <br /> 😍
              </h1>
              <h2>
                Obtenha feedback anônimo de seus amigos, colegas de trabalho e
                fãs.
              </h2>
              <div className="trace"></div>
              <p className="about-information">
                Você nunca sabe quem enviou uma mensagem para você!🔮
              </p>
              <br />
              <p className="allow-notification">
                Por favor, permita receber notificações
              </p>
            </Texts>

            {/* form 2*/}
            <IputsTexts
              ref={userRef}
              onSubmit={handleSubmit}
              className="inputs-links"
            >
              <h2>Digite seu Nome-</h2>
              <input
                type="text"
                className="input-nickName"
                placeholder="@Apelido"
                name="nick"
                required
              />
              <button className="btn" type="submit">
                Crie seu Link💎
              </button>
              <InputCheckBox className="privacy-terms">
                <label htmlFor="">
                  <input type="checkbox" required />
                  Você concorda com a Política de Privacidade e os Termos e
                  Condições do nosso site.
                </label>
              </InputCheckBox>
            </IputsTexts>
            {/* form 2*/}
          </ContainerUser>
        </section>
      </Container>
    </ContainerFather>
  );
}

export default SecretMessages;
