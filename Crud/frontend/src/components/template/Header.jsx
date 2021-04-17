import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex flex-column"> {/*Testar sem essas classes depois*/}
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p class="Lead text-muted">{props.subtitle}</p>
    </header>