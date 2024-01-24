export default function Header() {

    return (
        <header>        
            <nav className="navbar navbar-expand-lg bg-dark" style={{height: "80px"}}>
                <div className="container-fluid">
                    <div className="ms-5">
                        <img src="/img/icon-Universo.png" alt="" />
                        <img src="/img/Universo-Inclusivo.png" alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="/sobre">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">Cursos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="/contato">Contato</a>
                            </li>
                            <a href="">
                                <button type="button" className="btn btn-outline-warning" 
                                    style={{ marginTop: "5px" }}>
                                    Cadastre-se
                                </button>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
	    </header>
    );
}