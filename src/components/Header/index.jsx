import React from 'react';

import logo  from '../../assets/logo.png';

import './styles.css';

export function Header(){
    return(       
        <header>
            <div className='limit-section'>                
                <img src={logo} alt="logo" />
                <nav>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>       
        </header>
    );
}