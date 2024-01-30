"use client";
import RootLayout from "../app/layout";
import CadastroModal from "./components/CadastroModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import "../app/styles/cadastro.css";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        senha,
      });
      console.log(response);
      if (response.status === 200) {
        window.location.href = "../pages/home";
      } else {
        console.error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Ocorreu um erro: " + error);
    }
  };

  return (
    <RootLayout useHeaderCadastro={true}>
      <main>
        <div className="container container-custom mx-auto border my-5">
          <div>
            <h1 className="text-center mt-4 mb-3">Conecte-se agora</h1>
            <p className="text-center mt-2 mb-4">
              Olá, Bem-vindo de volta &#128075;{" "}
            </p>
          </div>
          <div className="text-center">
            <button className="btn btn btn-dark">
              <img
                src="/img/icon-google.png"
                alt="icone do google"
                className="me-3"
              />
              Faça login com o Google
            </button>
          </div>
          <p className="textLogin-cor text-center mt-4">
            {" "}
            Faça login com o Google
          </p>

          <form
            onSubmit={handleLogin}
            className="col-sm-12 col-md-8 col-lg-6 mx-auto"
          >
            <div className="form-group input-group mb-3">
              <label htmlFor="email" className="w-100">
                Email
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </label>
            </div>
            <div className="form-group input-group mb-3">
              <label htmlFor="senha" className="w-100">
                Senha
                <input
                  className="form-control"
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  autoComplete="current-password"
                />
              </label>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-4">
              <button className="btn btn-danger mb-3 mt-4" type="submit">
                Conecte-se
              </button>
            </div>
          </form>
          <p className="text-center">
            Não é registrado ainda ? <br></br>{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
            >
              Crie uma nova conta
            </a>
          </p>
        </div>
        <CadastroModal show={showModal} onHide={() => setShowModal(false)} />
      </main>
    </RootLayout>
  );
}
