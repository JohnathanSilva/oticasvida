import React from 'react';

import atendimento from '../../assets/atendimento.png';
import loja from '../../assets/loja.png';

export function CompanySection(){
    return(
        <section id='sobre'>
            <div>
                <h2>QUEM SOMOS NÓS?</h2>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades 
                    focada no atendimento ao público de
                    renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, 
                    qualidade e preço baixo.
                </p>
                <div>
                    <img src={loja} alt="" />
                    <div>
                        <h2>NOSSAS FILIAIS</h2>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div>
                        <h2>ATENDIMENTO FLEXÍVEL</h2>
                        <p>Nossa equipe é trienada para melhor te atender!</p>
                    </div>
                    <img src={atendimento} alt="" />
                </div>
            </div>
        </section>
    );
}