import React from 'react';

import './styles.css';

export function ContactsSection(){
    return(
        <section id='contato' className='container-contacts'>
            <div className='limit-section'>
                <h2>FALE CONOSCO</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes 
                    sociais ou da central de atendimento.
                </p>
                <div className='box-content'>
                    <div className='box-card'>  
                        <h4>Contato</h4>
                        <div>
                            <img src="assets/local.png" title="Ícone local" alt="Pino de localização" />
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div>
                            <img src="assets/telefone.png" title="Ícone telefone" alt="Ícone de um telefone" />
                            <p>(21) 99999-9999</p>
                        </div><div>
                            <img src="assets/email.png" title="Ícone email" alt="Ícone de uma carta" />
                            <p>conato@oticavida.com</p>
                        </div>
                    </div>
                    <div className='box-card'>  
                        <h4>Nossas Redes Sociais</h4>
                        <div>
                            <img src="assets/fb.png" title="Ícone facebook" alt="logo do facebook" />
                            <p>/OticaVida</p>
                        </div>
                        <div>
                            <img src="assets/ig.png" title="Ícone instagram" alt="logo do instagram" />
                            <p>@oticavidarj</p>
                        </div><div>
                            <img src="assets/tt.png" title="Ícone twitter" alt="logo do twitter" />
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}