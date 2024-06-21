import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(express.json());
app.use(cors());

const getUsers = (_, res) => {
  const select = "SELECT * FROM usuarios";
  db.query(select, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

const getMessages = (_, res) => {
  const select = "SELECT * FROM messages";

  db.query(select, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

const addUsers = (req, res) => {
  const add = "INSERT INTO usuarios (nick) VALUES (?)";
  const values = [req.body.nick]; // req.body.nick deve conter o valor enviado pelo frontend

  db.query(add, values, (err, data) => {
    if (err) return res.status(500).json({"Erro": err});

    return res.status(200).json({ message: "Usuário adicionado com sucesso" });
  });
};

const alterUser = (req, res) => {
  const userId = req.params.idUser;
  const newMessage = req.body.message;

  const alter = "UPDATE usuarios SET messages = ? WHERE id = ?";
  const values = [newMessage, userId];

  db.query(alter, values, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json({ message: "Usuario Alterado com sucesso" });
  });
};

const addMessage = (req, res) => {
  const addMsg = "INSERT INTO messages(user_id, message) VALUES (?,?)";
  const user_id = req.body.user_id;
  const message = req.body.message;

  console.log(message, user_id);
  const valueMessage = [user_id, message];

  db.query(addMsg, valueMessage, (err, data) => {
    if (err) return res.status(500).json(console.log("Erro"));
    return res
      .status(200)
      .json({ mensagem: "Mensagem cadastrada com sucesso" });
  });
};

const router = express.Router();

router.get("/message", getMessages);
router.post("/message/", addMessage);

router.get("/", getUsers);
router.post("/", addUsers);
router.put("/:idUser", alterUser);
app.use("/", router);

app.listen("8000", () => {
  console.log("Rodando na porta 8000");
});

