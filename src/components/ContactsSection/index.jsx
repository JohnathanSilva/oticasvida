import React from 'react';

import imgFace from '../../assets/fb.png';
import imgInsta from '../../assets/ig.png';
import imgEmail from '../../assets/email.png';
import imgCell from '../../assets/telefone.png';
import imgPlace from '../../assets/local.png';
import imgTwitter from '../../assets/tt.png';

export function ContactsSection(){
    return(
        <section id='contato'>
            <div>
                <h2>FALE CONOSCO</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes 
                    sociais ou da central de atendimento.
                </p>
                <div>
                    <div>  
                        <h2>Contato</h2>
                        <div>
                            <img src={imgPlace} alt="" />
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div>
                            <img src={imgCell} alt="" />
                            <p>(21) 99999-9999</p>
                        </div><div>
                            <img src={imgEmail} alt="" />
                            <p>conato@oticavida.com</p>
                        </div>
                    </div>
                </div>
                <div>  
                        <h2>Nossas Redes Sociais</h2>
                        <div>
                            <img src={imgFace} alt="" />
                            <p>/OticaVida</p>
                        </div>
                        <div>
                            <img src={imgInsta} alt="" />
                            <p>@oticavidarj</p>
                        </div><div>
                            <img src={imgTwitter} alt="" />
                            <p>@oticavidarj</p>
                        </div>
                    </div>
            </div>
        </section>
    );
}