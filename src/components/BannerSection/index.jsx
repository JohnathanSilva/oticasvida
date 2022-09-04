import React from 'react';

import capa from '../../assets/capa.png'

import './styles.css';

export function BannerSection(){
    return(
        <section>
            <img src={capa} alt="Capa" />
            <p>Preços baixos em</p>
            <h1>ÓCULOS DE GRAU E DE SOL</h1>
            <p>Você só encontra aqui</p>
        </section>
    );
}