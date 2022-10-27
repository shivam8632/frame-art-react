import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../../assets/img/logo.png';
import './navbar.scss';
//import 'react-dropdown/style.css';

import {toast } from 'react-toastify';
import UserContext from '../context/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faUser, faCartShopping, faUserCheck } from '@fortawesome/free-solid-svg-icons';

import { NavLink, useNavigate } from 'react-router-dom';


const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const {userauth, setDimension}= useContext(UserContext); //Get Login User
  const {prodDimension} = useContext(UserContext);

  console.log('prodDimension', prodDimension)


  const notify = () => toast.success("User Logged Out Successfully!");
  
  const navigate = useNavigate();

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const user = localStorage.getItem('loginToken');
  

  localStorage.setItem('cartDataa', JSON.stringify(prodDimension));

  console.log("PRODDATA", prodDimension);
  

  const logout = () => {
    localStorage.clear();
    navigate('/');
    notify();
  }


  return (
    <>
      <header className='header'>
        <Container>
          <nav className='nav d-md-flex w-100 justify-content-between align-items-center'>

            <NavLink to="/" className='logo' onClick={() => setOpen(false)}>
              <img src={Logo} alt="logo" />
            </NavLink>

            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""} nav-list d-flex flex-column flex-lg-row justify-content-md-start`}>
              <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Create your frame art</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <NavLink to="/material" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Materials</NavLink>
              </li>

              {/* <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Create your frame art</NavLink>
              </li> */}

              <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Parts</NavLink>
              </li>

              {/* <li>
                <div className="dropdown">
                  <div className='dropdown-header' onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item.id === selectedItem).label : "Parts"}
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className={`dropdown-body ${isOpen && 'open'}`}>
                    {items.map((item, i) => (

                      <div className="dropdown-item d-flex align-items-center" onClick={e => {
                        handleItemClick(e.target.i); setOpen(false)
                      }} key={i}>
                        <span className={`dropdown-item-dot ${i === selectedItem && 'selected'}`}>• </span>
                        <NavLink to='/product' className='dropdown-box d-flex align-items-center' onClick={() => closeMenu()}>
                          <img src={item.image} alt="product" />
                          <p>{item.label}</p>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                  </div>
              </li> */}

              <li onClick={() => setOpen(false)}>
                <NavLink to="/assembly" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Assembly</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Cleaning</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Gallery</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <ul className="nav-icons icons d-flex flex-row justify-content-center d-lg-none"  onClick={() => setOpen(false)}>
                  
                  <div className="button-icon">
                    {
                      user ?
                      <FontAwesomeIcon icon={faUserCheck} style={{ color: '#000' }} />
                      :
                      <FontAwesomeIcon icon={faUser} style={{ color: '#000' }} />
                    }
                  
                      <ul className="dropdown-child">
                        <li>
                          <button className='bttn'>
                          {
                            user ?
                            <div onClick={logout}>Logout</div>
                            :
                          <NavLink to="/login">Sign In</NavLink>
                          }
                          </button>
                        </li>
                        <li>Saved Projects</li>
                        <li>Orders & Proofs</li>
                        <li>Custom Quotes</li>
                        <NavLink to='/settings'><li>Account Settings</li></NavLink>
                      </ul>
                  </div>
                  <button className="button-icon">
                  <NavLink to='/cart'><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                      {
                        prodDimension.length > 0 ?
                        <span>
                          {prodDimension.length}
                        </span>
                        :
                        <span>0</span>
                      }
                </button>
                </ul>
              </li>

            </ul>
            <button onClick={handleToggle} className='toggle-button d-lg-none'>
              {navbarOpen ? (
                <FontAwesomeIcon icon={faXmark} style={{ color: "#000", width: "28px", height: "28px" }} />
              ) : (
                <FontAwesomeIcon icon={faBars} style={{ color: "#000", width: "28px", height: "28px" }} />
              )}
            </button>

            <ul className="nav-icons icons d-none d-lg-flex flex-row justify-content-center"  onClick={() => setOpen(false)}>
                <div className="button-icon">
                  {
                    user ?
                    <p className='mb-0'>{userauth?.user_name}</p>
                    :
                    <FontAwesomeIcon icon={faUser} style={{ color: '#000' }} />
                  }
                  
                  <ul className="dropdown-child">
                    <li>
                      <button className='bttn'>
                      {
                        user ?
                        <div onClick={logout}>Logout</div>
                        :
                       <NavLink to="/login">Sign In</NavLink>
                      }
                      </button>
                    </li>
                    <li>Saved Projects</li>
                    <li>Orders & Proofs</li>
                    <li>Custom Quotes</li>
                    <li><NavLink to='/settings'>Account Settings</NavLink></li>
                  </ul>
                </div>
                <div className="cart-icon">
                  <button className="button-icon">
                    <NavLink to='/cart'><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                      {
                        prodDimension.length > 0 ?
                        <span>
                          {prodDimension.length}
                        </span>
                        :
                        <span>0</span>
                      }
                  </button>
                </div>
          </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Navigation;