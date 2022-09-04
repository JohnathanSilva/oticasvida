import React from 'react';

import oculosDeGrau  from '../../assets/oculos01.png';
import oculosTransition  from '../../assets/oculos02.png';
import oculosDeSol  from '../../assets/oculos03.png';
import oculosInfantil  from '../../assets/oculos04.png'; 

export function ProductSection(){
    return(
        <section id='produtos'>
            <div>
                <h2>NOSSOS PRODUTOS</h2>
                <p>
                    Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos 
                    masculino, feminino e infantil.
                </p>
                <p>
                    Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                </p>
                <div>
                    <div>
                        <h2>Óculos de grau</h2>
                        <img src={oculosDeGrau} alt="" />
                        <p>R$ 500,00</p>
                    </div>
                    <div>
                        <h2>Óculos Transition</h2>
                        <img src={oculosTransition} alt="" />
                        <p>R$ 750,00</p>
                    </div>
                    <div>
                        <h2>Óculos de sol</h2>
                        <img src={oculosDeSol} alt="" />
                        <p>R$ 700,00</p>
                    </div>
                    <div>
                        <h2>Óculos infantil</h2>
                        <img src={oculosInfantil} alt="" />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção prenventiva</li>
                    <li>Descontos especiais na compra da segunda unidade </li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}