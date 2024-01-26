import "./home.css";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="area-aprender-conosco">
            <h3 className="">Comece a aprender conosco agora</h3>
            <p className="">
              Soluções abrangentes e inovadoras para ajudar à sua empresa ser mais
              diversa e inclusiva!
            </p>
            <button type="button" className="botao-aprender mt-3">
              Comece a aprender
            </button>
          </div>
          <div>
            <img className="img-fluid" src="/img/menino-lendo-home.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4 d-flex justify-content-around container-respons ">
          <div>
            <img src="img/section2-duas-pessoas-estudando.jpg" className="img-fluid dupla-noot" />
          </div>
          <div className="ms-5 ">
            <h2>Beneficie-se do nossos cursos on-line</h2>
            <div className="mt-4">
              <h4> <img src="/img/icon-beca.png" />Grau on-line</h4>
              <p className="">Questões comentadas em vídeo pelos seus professo</p>
            </div>
            <div>
              <h4> <img src="/img/icon-curso-curto.png" />Curso curto</h4>
              <p>Durante o curso, você irá adquirir conhecimento e habilidades práticas</p>
            </div>
            <div>
              <h4><img src="/img/icon-pessoa.png" />Aprenda com especialista</h4>
              <p>Os Especialistas em Carreiras ajudarão você a encontrar um emprego em TI, começando pela Fase
                2 do curso integral</p>
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="container d-flex align-items-center justify-content-around mt-5 mb-5 criar-conta ">
          <div>
            <p className="titulo-sec text-justify">Comece a aprender criando uma conta gratuita e registre-se
            </p>
          </div>
          <div>
            <img src="/img/pessoa-libra-home.jpg" className="img-fluid dupla-noot" />
          </div>
        </div>
      </section>

      <section className="cards-destinos">
        <div className="d-flex align-items-center justify-content-center mt-5">
          <h3>Categorias</h3>
        </div>

        <div className="container text-center my-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div className="col">
              <div className="card shadow">
                <img src="/img/pessoa-braile-home.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Diversidade e inclusão</h5>
                  <p className="card-text">
                    A diversidade e inclusão são fundamentais para criar bons ambientes de trabalho.
                  </p>
                  <p>Por: Peter Rowardson</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow">
                <img src="/img/pessoa-estudando-gridhome.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Data analytics</h5>
                  <p className="card-text">
                    Desenvolver projetos analíticos envolvendo a criação de pipelines de dados
                  </p>
                  <p>Por: Lorena</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow">
                <img src="/img/pessoa-estudando2-gridhome.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Software educacional</h5>
                  <p className="card-text">
                    Esses softwares podem abranger uma ampla variedade de ferramentas para o aprendizado
                  </p>
                  <p>Por: Thiago</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow">
                <img src="/img/reuniao-gridhome.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Marketing básico </h5>
                  <p className="card-text">
                    Saiba tudo sobre o curso de Marketing básico e comece a estudar
                  </p>
                  <p>Por: Sofia</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow">
                <img src="/img/pessoa-trabalhando-home.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Desenvolvimento web</h5>
                  <p className="card-text">
                    Saiba tudo sobre o curso de Desenvolvimento web.
                  </p>
                  <p>Por: Peter Rowardson</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow">
                <img src="/img/pessoas-vendo-aula-home.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">As vantagens da diversidade</h5>
                  <p className="card-text">
                    Saiba tudo sobre as vantagens da diversidade e inclusão
                  </p>
                  <p>FLavia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center mt-5">
          <div className="row row-cols-4">
            <div className="col">
              <div className="card shadow" style={{width: "14rem"}}>
                <div className="d-flex align-items-center justify-content-center  mb-3" 
                  style={{height: "100px;"}}>
                  <img src="/img/Icon-cultura.png" className="icon-image" alt="..." />
                </div>
                <div className="card-body ">
                  <h5 className="card-title">Cultura</h5>
                  <p className="card-text">Nossa empresa disponibiliza diversos projetos culturais que visam a
                    melhoria da vida de cada um.</p>
                </div>
              </div>

            </div>
            <div className="col">
              <div className="card shadow" style={{width: "14rem"}}>
                <div className="d-flex align-items-center justify-content-center  mb-3" 
                  style={{height: "100px"}}>
                  <img src="/img/icon-qualificação.png" className="icon-image" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Qualificações</h5>
                  <p className="card-text">Por conta das parcerias, podemos oferecer também qualificações para
                    aqueles que estão dando esse primeiro passo.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow" style={{width: "14rem"}}>
                <div className="d-flex align-items-center justify-content-center  mb-3" 
                  style={{height: "100px"}}>
                  <img src="/img/icon-empregabilidade.png" className="icon-image" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Empregabilidade</h5>
                  <p className="card-text">Após a participação e aprendizado, é verificado quais dos
                    participantes já estão aptos para ingressar no mercado de trabalho.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow" style={{width: "14rem"}}>
                <div className="d-flex align-items-center justify-content-center" 
                  style={{height: "100px"}}>
                  <img src="/img/icon-tecnologia.png" className="icon-image" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">Tecnologia</h5>
                  <p className="card-text">A tecnologia é uma de nossas maiores aliadas no combate a
                    diversidade e Inclusão,levando nossa empresa a todos..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <button
            style={{fontSize: "14px", background: "#212529", color: "white", width: "178px", 
            height: "40px", borderRadius: "3px"}}>
            Mais artigos</button>
        </div>
      </section>

    </main>

  );
}
