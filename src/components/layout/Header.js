import React, { Component } from 'react';
import {Link} from 'react-router-dom';
function Header(){
    return (
        <header style={headerStyle}>
        <h1>Your Profile</h1>
        <Link style={linkStyle} to="/Notifications">Notifications</Link>|
        <Link style={linkStyle} to="/Certifications">Certificate Applications</Link>|
        <Link style={linkStyle} to="/Tasks">Uploaded Tasks</Link>|
        <Link style={linkStyle} to="/">Home Page</Link>|
        <Link style={linkStyle} to="/Getcontact"> Admin Conts</Link>
        </header>
    )
}
const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
} 
const linkStyle ={
    color: '#fff',
    textDecoration: 'none'
}
export default Header;