import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import ProductBox from '../../assets/img/product-box.jpg';
import TissuePaper from '../../assets/img/tissue-paper.jpg';
import Logo from '../../assets/img/logo.png';
import './navbar.scss';
//import 'react-dropdown/style.css';

import {toast } from 'react-toastify';
import UserContext, { CartState } from '../context/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faUser, faCartShopping, faUserCheck } from '@fortawesome/free-solid-svg-icons';

import { NavLink, useNavigate } from 'react-router-dom';


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
  const [selectedItem, setSelectedItem] = useState(null);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const {userauth, setDimension}= useContext(UserContext); //Get Login User
  const {prodDimension} = useContext(UserContext);


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

  const getCartData = JSON.parse(localStorage.getItem('cartDataa'))
  console.log("GETCARTDATA" ,getCartData);
  console.log("PRODDATA", prodDimension);
  console.log("PRDLENGTH", Object.keys({prodDimension}).length);
  

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
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Frame art build up</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <NavLink to="/material" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Materials</NavLink>
              </li>

              <li onClick={() => setOpen(false)}>
                <NavLink to="/product" activeclassname='is-active' onClick={() => closeMenu()} className="menu-link">Create your frame art</NavLink>
              </li>

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
                        <li>Account Settings</li>
                      </ul>
                  </div>
                  <button className="button-icon">
                  <FontAwesomeIcon icon={faCartShopping} />
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
                    <p className='mb-0 text-white'>{userauth?.user_name}</p>
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
                    <li>Account Settings</li>
                  </ul>
                </div>
                <div className="cart-icon">
                  <button className="button-icon">
                    <FontAwesomeIcon icon={faCartShopping} />
                      {
                        Object.keys(prodDimension).length > 0 ?
                        <span>
                          {Object.keys(prodDimension).length}
                        </span>
                        :
                        <span>0</span>
                      }
                  </button>
                  <div className="cart-popup">
                    {
                      Object.keys(getCartData).length != 0 ?
                      (
                        <div className="cart-popup-content">
                        {/* <span className="popup-image">
                        <img src={ProductBox} alt="product-image" />
                      </span> */}
                      <div className="cart-content">
                        <p><strong>Length: </strong> {getCartData.lengthget}</p>
                        <p><strong>Width: </strong> {prodDimension.width}</p>
                        <p><strong>Depth: </strong> {prodDimension.depth}</p>
                        <p><strong>Paper: </strong> {prodDimension.paper}</p>
                        <p><strong>Coating: </strong> {prodDimension.coating}</p>
                        <p><strong>Sides: </strong> {prodDimension.sides}</p>
                        <p><strong>Quantity: </strong> {prodDimension.quantity}</p>
                      </div>
                    </div>
                      )
                      :
                      (
                        <p className='empty-cart'>No Items</p>
                      )
                    }
                  </div>
                </div>
          </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Navigation;