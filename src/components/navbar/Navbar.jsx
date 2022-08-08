
import React, { useState, useContext } from 'react';


import Container from 'react-bootstrap/Container';
import ProductBox from '../../assets/img/product-box.jpg';
import TissuePaper from '../../assets/img/tissue-paper.jpg';
import Logo from '../../assets/img/logo.png';
import './navbar.scss';

import {toast } from 'react-toastify';
import UserContext from '../context/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faBars, faXmark, faUser, faCartShopping, faUserCheck } from '@fortawesome/free-solid-svg-icons';

import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const data = [
  {
    image: ProductBox,
    label: 'shipping'
  },
  {
    image: TissuePaper,
    label: 'mailer'
  },
  {
    image: ProductBox,
    label: 'shipping'
  },
  {
    image: TissuePaper,
    label: 'mailer'
  },
  {
    image: ProductBox,
    label: 'shipping'
  },
  {
    image: TissuePaper,
    label: 'mailer'
  },
  {
    image: ProductBox,
    label: 'shipping'
  },
  {
    image: ProductBox,
    label: 'shipping'
  },
  {
    image: TissuePaper,
    label: 'mailer'
  },
];

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const {userauth}= useContext(UserContext); //Get Login User

  console.log('userAuth', userauth )


  const notify = () => toast.success("User Logged Out Successfully!");
  
  const navigate = useNavigate();

  
  const toggleDropdown = () => setOpen(!isOpen);

  
  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  }

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }


  const user = localStorage.getItem('loginToken');

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

            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""} nav-list d-flex flex-column flex-md-row justify-content-md-start`}>
              <li>
                <div className="dropdown">
                  <div className='dropdown-header' onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item.id === selectedItem).label : "All Products"}
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
               </li>
           


              <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Product Boxes</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Shipping Boxes</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Mailer Boxes</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <ul className="nav-icons icons d-flex flex-row justify-content-center d-md-none"  onClick={() => setOpen(false)}>
                  
                  <div className="button-icon">
                    {
                      user ?
                      <FontAwesomeIcon icon={faUserCheck} style={{ color: '#FFF' }} />
                      :
                      <FontAwesomeIcon icon={faUser} style={{ color: '#FFF' }} />
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
                        <li>Account Settings</li>
                      </ul>
                  </div>
                  <button className="button-icon">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
                </ul>
              </li> 
              <li>
              </li>

            </ul>
            <button onClick={handleToggle} className='toggle-button d-md-none'>
              {navbarOpen ? (
                <FontAwesomeIcon icon={faXmark} style={{ color: "#FFF", width: "28px", height: "28px" }} />
              ) : (
                <FontAwesomeIcon icon={faBars} style={{ color: "#FFF", width: "28px", height: "28px" }} />
              )}
            </button>

            <ul className="nav-icons icons d-none d-md-flex flex-row justify-content-center"  onClick={() => setOpen(false)}>
                <div className="button-icon">
                  {
                    user ?
                    <p className='mb-0 text-white'>{userauth?.user_name}</p>
                    :
                    <FontAwesomeIcon icon={faUser} style={{ color: '#FFF' }} />
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
                    <li>Account Settings</li>
                  </ul>
                </div>
                <button className="button-icon">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
          </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Navigation;