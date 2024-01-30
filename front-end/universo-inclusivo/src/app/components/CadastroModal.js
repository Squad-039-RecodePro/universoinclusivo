import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const CadastroModal = ({ show, onHide }) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [status, setStatus] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showMensagem, setShowMensagem] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/cadastro", {
        nome,
        cpf,
        email,
        senha,
        status,
      });
      console.log(response.data);
      setMensagem("Usuário cadastrado com sucesso!");
      setShowMensagem(true);
      setTimeout(() => {
        setShowMensagem(false);

      }, 10000);
    } catch (error) {
      console.error("Erro no cadastro: ", error);
      setMensagem("Erro ao cadastrar usuário. Tente novamente.");
      setShowMensagem(true);
      setTimeout(() => {
        setShowMensagem(false);
      }, 10000);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Criar Nova Conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showMensagem && (
          <Alert variant={mensagem.includes("sucesso") ? "success" : "danger"}>
            {mensagem}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Selecione o Status</option>
              <option value="matriculado">Matriculado</option>
              <option value="nao_matriculado">Não Matriculado</option>
            </Form.Select>
          </Form.Group>
          <Button variant="btn btn-danger mb-3 mt-4" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CadastroModal;
