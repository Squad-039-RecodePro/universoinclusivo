import "./cursos.css";

export default function Cursos() {
  return (
    <main>
      <div className="container container-custom mx-auto border my-5">
        <div>
          <h1 className="text-center mt-4 mb-3">Conecte-se agora</h1>
          <p className="text-center mt-2 mb-4">Olá, Bem-vindo de volta &#128075; </p>
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
        <p className="textLogin-cor text-center mt-4"> Faça login com o Google</p>

  <form className="col-sm-12 col-md-8 col-lg-6 mx-auto">
    <div className="form-group input-group mb-3">
      <label htmlFor="login" className="w-100">
        Email
        <input
          className="form-control"
          name="login"
          id="login"
          type="text"
          placeholder="Digite seu email"
        />
      </label>
    </div>
    <div className="form-group input-group mb-3">
      <label htmlFor="senha" className="w-100">
        Senha
        <input
          className="form-control"
          name="senha"
          id="senha"
          type="password"

          placeholder="Digite sua senha"
        />
      </label>
    </div>
  </form>

        <div className="d-flex justify-content-evenly mt-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckIndeterminate"
            />
            <label className="form-check-label" htmlFor="LembreDeMim">
              Lembre de mim
            </label>
          </div>

          <a href="#">
            <p> Esqueceu a senha ?</p>
          </a>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-4">
          <button className="btn btn-danger mb-3" type="button">
            Conecte-se
          </button>
          <p className="text-center">Não é registrado ainda ? <br></br> <a href="#">Crie uma nova conta</a></p> 
        </div>
      </div>
    </main>
  );
}
