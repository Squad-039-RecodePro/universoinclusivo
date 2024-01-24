import "./sobre.css";

export default function Sobre() {
    return (
        
        <main>
            <section className="bg-rosa-claro">
                <div className="container d-flex">
                    <div className="area-sobre-inicio">
                        <img className="img-lampada-inicio border-0" src="/img/lampada-sobre.png" />
                        <h1 className="titulo-sobre-inicio">
                            Comece a <span style={{color: "#22aa55"}}>aprender</span> habilidades com seu mentor favorito
                        </h1>
                        <p className="mt-3 texto-sobre-inicio">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classNameical Latin literature from 45 BC
                        </p>
                        <a href="#" className="botao-explorar-curso mt-2">
                            Explorar Curso
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-principais-categorias">

                <div className="container d-md-flex justify-content-between mt-5">

                    <div className="card-estatisticas">
                        <img className="border-0" alt="teste" src="/img/Instrutor-sobre.png" 
                            style={{backgroundColor:"#EA833F"}} />
                        <div className="texto-estatisticas">
                            <div className="fw-bold">300</div>
                            <div className="mt-1">Instrutores</div>
                        </div>
                    </div>

                    <div className="card-estatisticas">
                        <img className="border-0" alt="teste" src="/img/aluno-sobre.png" 
                            style={{background: "linear-gradient(142.27deg, #29DA82 11.6%, #15B063 88.49%)"}} />
                        <div className="texto-estatisticas">
                            <div className="fw-bold">20.000+</div>
                            <div className="mt-1">Alunos</div>
                        </div>
                    </div>

                    <div className="card-estatisticas">
                        <img className="border-0" alt="teste" src="/img/Video-sobre.png" 
                            style={{background: "linear-gradient(133.33deg, #3D5CFF 11.36%, #6985F9 89.87%)"}} />
                        <div className="texto-estatisticas">
                            <div className="fw-bold">10.000+</div>
                            <div className="mt-1">Vídeos</div>
                        </div>
                    </div>

                    <div className="card-estatisticas">
                        <img className="border-0" alt="teste" src="/img/usuarios-sobre.png" 
                            style={{background: "linear-gradient(180deg, #9E78F5 0%, #8255EE 100%)"}}/>
                        <div className="texto-estatisticas">
                            <div className="fw-bold">100.000+</div>
                            <div className="mt-1">Usuários</div>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-5">
                    <h3 className="fw-bold">
                        Principais
                        <span style={{color: "#55bb88"}}>categorias</span>
                    </h3>
                    <p>Mais de 12.000 designs exclusivos de listas de cursos on-line</p>
                </div>

                <div className="container container-categorias mt-5">

                    <div className="card-principais-categorias texto-azul-escuro" >
                        <img src="/img/Marketing-Sobre.png" />
                        <h4 className="fw-bold mt-5 text-center">Marketing Digital</h4>
                        <p className="text-center mt-4">25 cursos</p>
                    </div>

                    <div className="card-principais-categorias texto-azul-escuro">
                        <img src="/img/Rede-Desenvolvimento-sobre.png" />
                        <h4 className="fw-bold mt-5 text-center">Rede <br/>Desenvolvimento</h4>
                        <p className="text-center mt-4">16 cursos</p>
                    </div>

                    <div className="card-principais-categorias texto-azul-escuro">
                        <img src="/img/arte-Humanidades-sobre.png" />
                        <h4 className="fw-bold mt-5 text-center">Arte &amp; <br/>Humanidades</h4>
                        <p className="text-center mt-4">76 cursos</p>
                    </div>

                    <div className="card-principais-categorias texto-azul-escuro">
                        <img src="/img/Desenvolvimento-pessoal-sobre.png" />
                        <h4 className="fw-bold mt-5 text-center">Desenvolvimento <br />Pessoal</h4>
                        <p className="text-center mt-4">22 cursos</p>
                    </div>

                </div>

            </section>

            <section className="container d-md-flex justify-content-between mt-5 pb-5">
                <div className="texto-acesso-aprendizado">
                    <h2 className="texto-azul-escuro fw-bold">
                        Acesso ao aprendizado a qualquer hora e em qualquer lugar
                        </h2>
                        <p className="mt-4 fw-bold texto-cinza-claro">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummyLorem Ipsum is simply dummy
                            text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                        </p>
                        <a href="#" className="link-iniciar-sobre">Iniciar</a>
                </div>
                <div className="container-imagem-aprendizado">
                    <img src="/img/acesso-aprendizado-sobre.png" alt="Imagem acesso ao aprendizado" />
                </div>
            </section>

            <section className="mt-3 container">
                <h2 className="texto-azul-escuro text-center fw-bold">
                    O que nosso guardião diz
                </h2>
                <p className="text-center mt-5 fw-bold texto-guardiao-sobre texto-cinza-claro">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy
                </p>

                <div className="d-md-flex mt-5 pb-5" style={{gap: "60px"}}>
                    <div className="shadow card-guardiao-sobre">
                        <div className="d-flex">
                            <img src="/img/whiteal-depoimento-sobre.png" />
                            <div>
                                <p className="fw-bold texto-azul-escuro">teste</p>
                                <p>Student guardian</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy

                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy
                            </p>
                        </div>
                    </div>

                    <div className="shadow card-guardiao-sobre">
                        <div className="d-flex">
                            <img src="/img/menino-lendo-home.png" />
                            <div>
                                <p className="fw-bold texto-azul-escuro">teste</p>
                                <p>Student guardian</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy

                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy
                            </p>
                        </div>
                    </div>

                </div>
            </section>

	    </main>
    );
}