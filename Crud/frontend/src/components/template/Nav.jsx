import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refatorar depois! Nav-item
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuário
            </Link>
            <Link to='/contato'>
                <i className="fa fa-id-card"></i> Contato
            </Link>

        </nav>
    </aside>