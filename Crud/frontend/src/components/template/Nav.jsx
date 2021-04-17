import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refatorar depois! Nav-item*/}
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuário
            </a>
            <a href='#/contato'>
                <i className="fa fa-id-card"></i> Contato
            </a>

        </nav>
    </aside>