import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo-reprograma.png'
import Menu from './menu'
import  './navbar.css'

const Navbar = () => (
    <nav className='navbar'>
        <Link to='/'>
        <img className='navbar__logo' src={logo} 
        alt='Reprograma'/>
        </Link> 
        <Menu></Menu>
    </nav>
)

export default Navbar