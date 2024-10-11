import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import NavBarra from "../components/NavBarra";

const url = "http://localhost:5000/produtos"

const Cadastro = () => {
  // variaveis pro usuario
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");

  // variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault()

      if(!nome == ""){
        if(!categoria == ""){
          if(!preco == ""){
            const prod = {nome, categoria, preco}
            const res = await fetch(url, {
              method: "POST",
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(prod)
            })
            alert("Produto cadastrado com sucesso")
            setNome("")
            setCategoria("")
            setPreco("")
            navigate("/produto")

          }else{
            setAlertaClass("mb-3")
            setAlertaMensagem("O campo preço não pode ser vazio")
          }

        }else{
          setAlertaClass("mb-3")
          setAlertaMensagem("O campo categoria não pode ser vazio")
        }

      }else{
        setAlertaClass("mb-3")
        setAlertaMensagem("O campo nome não pode ser vazio")
      }
  }

  return (
    <div style={{backgroundColor: 'lightgreen'}}>
      <NavBarra/>
      <Container>
        <span class="material-symbols-outlined"
              style={{ fontSize: "100px" }}>
          Cadastrar Produto
        </span>
        <form onSubmit={handleSubmit}>
          {/* caixinha do nome */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha da categoria */}
          <FloatingLabel
            controlId="floatingInputCategoria"
            label="Categoria"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite sua categoria"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha do preço */}
          <FloatingLabel
            controlId="floatingPreco"
            label="Preço"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu preço"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </FloatingLabel>

          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button variant="primary" type="submit">Cadastrar</Button>
        </form>
      </Container>
    </div>
  );
};

export default Cadastro;