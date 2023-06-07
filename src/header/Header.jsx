import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './headerStyle.css'
import logo from '../img/logo_taxislibres.png'
const Header = () => {

    const navbar = useRef()

  const clickMenuHam = () => {
      navbar.current.classList.toggle('navbar-open')
  }


  return (
    <header className="header">
    <h1 className="header__title">
      <Link to='/' src=''><img className="animate__animated animate__bounce" src={logo}/></Link>
    </h1>
    <div onClick={clickMenuHam} className="header__menuham">
                <i className="fa-solid fa-bars"></i>
            </div>
            <nav ref={navbar} className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__items">
                        <NavLink
                            to='/about'
                            className= ''>
                            <p className="navbar__label">Acerca del Hackathon</p>
                        </NavLink>
                    </li>
                    <li className="navbar__items">
                        <NavLink
                            to='/awards'
                            className=''>
                            <p className="navbar__label">Premios</p>
                        </NavLink>
                    </li>
                    <li className="navbar__items">
                        <NavLink
                            to='/form'
                            className=''>
                            <p className="navbar__label">Inscripcion</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
   
  </header>
  )
}

export default Header