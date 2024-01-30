'use client'

import { useState } from "react";

export default function Contato() {

  const [ mensagem, setMensagem ] = useState('');

  async function envia(formData: FormData) {
    
    const body = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      assunto: formData.get('assunto'),
      mensagem: formData.get('mensagem'),
    };

    try {
      let result = await fetch('http://localhost:8080/api/contato', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMensagem('Contato enviado!');

    }
    catch (e) {
      setMensagem('Erro ao enviar contato.');
    }
  }

  return (
    <main>
      <section className="contact-section section_padding">

        <h1 className="text-center mt-5">
          CONTATO
        </h1>
        <div className="container_contato container mt-5">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Entrar em Contato</h2>
            </div>
            <div className="col-lg-8">
              <form className="form-contact contact_form" action={envia}
                id="contactForm" >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">

                      <textarea className="form-control input-group mb-3 w-100" 
                        name="mensagem" id="mensagem" required
                        cols={30} rows={9} onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Digite a mensagem'}
                        placeholder='Digite a Mensagem'></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group input-group mb-3">
                      <input className="form-control" name="nome" id="nome" type="text"
                        required onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Digite seu nome'} 
                        placeholder='Digite seu Nome' />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input className="form-control input-group mb-3" name="email" id="email" type="email"
                        required onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Insira seu Email'}
                        placeholder='Insira seu Email' />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input className="form-control" name="assunto" id="assunto" type="text"
                        required onFocus={(e) => e.target.placeholder = ''} 
                        onBlur={(e) => e.target.placeholder = 'Digite o assunto'}
                        placeholder='Digite o Assunto' />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className=" mt-3 button btn btn-info button-contactForm btn_1">Enviar
                    Mensagem
                  </button>
                </div>
                <div>
                  {mensagem}
                </div>

              </form>
            </div>
            <div className=" mt-5 col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-home"></i></span>
                <div className="media-body">
                  <h3>Rio de Janeiro</h3>
                  <p>Rua Presidente Vargas, 123</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                <div className="media-body">
                  <h3>(21) 3456-45678</h3>
                  <p>De Seg-Sexta | 08h às 18h</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-email"></i></span>
                <div className="media-body">
                  <h3>squad39recodepro@gmail.com</h3>
                  <p>Envie-nos a sua consulta a qualquer momento!</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="d-none d-sm-block mb-6 pb-4 container mt-5">
          <h3 className="text-center">LOCALIZAÇÃO</h3>
          <iframe className="mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235199.37769568487!2d-43.610790246516785!3d-22.913729487149148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1692966732739!5m2!1spt-BR!2sbr"
            width="100%" height="450" style={{border:"0"}} allowFullScreen={true} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

    </main>

  );
}