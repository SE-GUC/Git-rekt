import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>LirtenHUB</h1>
            <Link style = {linkStyle} to = "/viewProfile">viewConsultancy</Link> | <link
            style = {linkStyle} to = "/">Home</link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;