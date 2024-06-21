import { useEffect, useState, useRef } from "react";
import SecretMessages from "./container/SecretMessages.jsx";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState();
  const ref = useRef();

  const getUsers = async () => {
    try {
      const resp = await axios.get("http://localhost:8000");
      const lastId = resp.data[resp.data.length - 1].id;

      setUsers(resp.data.sort((a, b) => (a.nick > b.nick ? 1 : -1)));

      setIdUser(lastId);
    } catch (error) {
      return "";
    }
  };

  useEffect(() => {
    getUsers();

    const minhaChave = "id";
    const valor = localStorage.getItem(minhaChave);

    if (valor !== null) {
      // Existe um valor associado à chave
      return navigate(`/createLink/${valor}`);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current.nick;
    getUsers();
    if (!user.value) {
      return "";
    } else {
      await axios
        .post("http://localhost:8000", { nick: user.value })
        .then((res) => {
          return res;
        })
        .catch((res) => {
          return res;
        });

      const updatedUsers = await axios.get("http://localhost:8000");
      const newLastId = updatedUsers.data[updatedUsers.data.length - 1].id;

      if (newLastId > 0) {
        console.log("Esté é o id: ", newLastId);
        navigate(`/createLink/${newLastId}`);
        localStorage.setItem("id", newLastId);
      }
    }

    getUsers();
  };

  return (
    <div className="">
      <SecretMessages userRef={ref} handleSubmit={handleSubmit} />
      <Outlet />
    </div>
  );
}
export default App;
