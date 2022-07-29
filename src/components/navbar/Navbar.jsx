import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProductBox from '../../assets/img/product-box.jpg';
import TissuePaper from '../../assets/img/tissue-paper.jpg';
import Logo from '../../assets/img/logo.png';
import './navbar.scss';
import 'react-dropdown/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faBars, faXmark, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

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
  const [navbarOpen, setNavbarOpen] = useState(false)
  
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

  return (
    <>
      <header className='header'>
        <Container>
          <nav className='nav d-md-flex w-100 justify-content-between align-items-center'>
            <Link to="/" className='logo'>
              <img src={Logo} alt="logo" />
            </Link>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""} nav-list d-flex flex-column flex-md-row justify-content-md-start`}>
              <li>
                <div className="dropdown">
                  <div className='dropdown-header' onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item.id === selectedItem).label : "All Products"}
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className={`dropdown-body ${isOpen && 'open'}`}>
                    {items.map((item, i) => (
                      <div className="dropdown-item d-flex align-items-center" onClick={e => handleItemClick(e.target.i)} key={i}>
                        <span className={`dropdown-item-dot ${i === selectedItem && 'selected'}`}>• </span>
                        <Link to={`/${item.label}`} className='dropdown-box d-flex align-items-center' onClick={() => closeMenu()}>
                          <img src={item.image} alt="product" />
                          <p>{item.label}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link to="/" onClick={() => closeMenu()} className="menu-link">Product Boxes</Link>
              </li>

              <li>
                <Link to="/shipping" onClick={() => closeMenu()} className="menu-link">Shipping Boxes</Link>
              </li>

              <li>
                <Link to="/mailer" onClick={() => closeMenu()} className="menu-link">Mailer Boxes</Link>
              </li>

              <li>
              <ul className="nav-icons icons d-flex flex-row justify-content-center d-md-none">
                <button className="button-icon">
                  <FontAwesomeIcon icon={faUser} />
                </button>
                <button className="button-icon">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </ul>
              </li>

            </ul>
            <button onClick={handleToggle} className='toggle-button d-md-none'>
              {navbarOpen ? (
                <FontAwesomeIcon icon={faXmark} style={{ color: "#FFF", width: "28px", height: "28px" }} />
              ) : (
                <FontAwesomeIcon icon={faBars} style={{ color: "#FFF", width: "28px", height: "28px" }} />
              )}
            </button>
            <ul className="nav-icons icons d-none d-md-flex flex-row justify-content-center">
                <button className="button-icon">
                  <FontAwesomeIcon icon={faUser} />
                </button>
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