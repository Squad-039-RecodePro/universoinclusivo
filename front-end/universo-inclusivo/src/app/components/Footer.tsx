export default function Footer() {

    return (
        <footer style={{
            height: "auto",
            width: "100%",
            backgroundColor: "#212529",
        }}>
            <div className="mt-2 footer-resp" 
                style={{color: "white", display: "flex", justifyContent: "space-around"}}>
                <div style={{marginTop: "60px"}}>
                    <img src="/img/icon-Universo.png" alt="" />
                    <img src="/img/Universo-Inclusivo.png" alt="" />
                </div>

                <div style={{marginTop: "30px"}}>
                    <h6>Siga-nos</h6>
                    <div>
                        <img src="/img/icon_facebook.png" alt="" />
                        <img src="/img/icon_instagram.png" alt="" />
                        <img src="/img/icon_linkedin.png" alt="" />
                        <img src="/img/icon_twitter.png" alt="" />
                    </div>
                </div>

                <div style={{marginTop: "30px"}}>
                    <h6>Links Úteis</h6>
                    <div>
                        <ul style={{color: "#6c6c6c"}}>
                            <li>Nossos projetos</li>
                            <li>FAQ's</li>
                            <li>Noticias e atualizações</li>
                        </ul>
                    </div>
                </div>
                <div style={{marginTop: "30px"}}>
                    <h6>Contato</h6>
                    <p className="text-justify" style={{color: "#6c6c6c"}}>
                        Endereço : Rua Presidente Vargas, 123-RJ <br />Email :
                        squad39recodepro@gmail.com <br />
                        Telefone : +21 3456-45678
                    </p>
                </div>
            </div>
            <div className="text-center mt-5" style={{color: "#6c6c6c"}}>
                ₢ Todos os direitos autorais reservados
            </div>
        </footer>
    );
}