import React from 'react';

import logo  from '../../assets/logo.png';

import './styles.css';

export function Header(){
    return(       
        <header className='container'>
            <nav className='limit-section'>                
                <img src={logo} alt="logo" className='imgLogo' />
                <nav className='limit-section'>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </nav>       
        </header>
    );
}