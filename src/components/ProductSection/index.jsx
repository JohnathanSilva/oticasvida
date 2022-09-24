import React from 'react';

import './styles.css';

export function ProductSection(){
    return(
        <section id='produtos' className='container-product'>
            <div className='limit-section'>
                <h2>NOSSOS PRODUTOS</h2>
                <p>
                    Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos 
                    masculino, feminino e infantil.
                </p>
                <p>
                    Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                </p>
                <div className='product'>
                    <div className='box-product'>
                        <h2>Óculos de grau</h2>
                        <img src='assets/oculos01.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
                        <p>R$ 500,00</p>
                    </div>
                    <div className='box-product'>
                        <h2>Óculos Transition</h2>
                        <img src='assets/oculos02.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
                        <p>R$ 750,00</p>
                    </div>
                    <div className='box-product'>
                        <h2>Óculos de sol</h2>
                        <img src='assets/oculos03.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
                        <p>R$ 700,00</p>
                    </div>
                    <div className='box-product'>
                        <h2>Óculos infantil</h2>
                        <img src='assets/oculos04.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
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