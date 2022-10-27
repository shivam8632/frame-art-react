import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { API } from '../../config/api';
import {toast } from 'react-toastify';

import './settings.scss';

export default function Settings() {

    const [confNewPass, setConfNewPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [oldPass, setOldPass] = useState('');
    var token = localStorage.getItem('loginToken');
    const pass = localStorage.getItem('password');

    const wrongOld = () => toast.warn("Wrong Password Entered");
    const wrongConfirm = () => toast.warn("New Password and Confirm Password are not Same");

    const passChange = (e) => {
        setNewPass(e.target.value);
    }

    const oldChange = (e) => {
        setOldPass(e.target.value);
    }

    const confirmNew = (e) => {
        setConfNewPass(e.target.value);
    }

    const changePass = (e) => {
        e.preventDefault();
        if(pass == oldPass) {
            if(newPass == confNewPass) {
                axios.post(API.BASE_URL + 'change-password/', {
                    old_password: oldPass,
                    new_password: newPass,
                }, {
                    headers: {"Authorization": `Bearer ${token}`}
                })
                
                .then((res)=>{
                    console.log("Success");
                  })
          
                  .catch(function(error) {
                      console.log(error.response);
                      
                  })
            }
            else {
                wrongConfirm();
            }
        }
        else {
            console.log('Wrong Password');
            wrongOld();
        }
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };

  return (
    <div className="settings">
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="justify-content-between">
                    <Col sm={3} className="side-tab">
                    <Nav variant="pills" className="flex-column side-main">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Contact Information</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Login Information</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={8} className="tab-main">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <h4 className='w-100'>Contact Information</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label>First Name</label>
                                    <input type="text" />
                                </div>
                                <div className="input-container">
                                    <label>Last Name</label>
                                    <input type="text" />
                                </div>
                                <div className="input-container">
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                            </form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <h4 className='w-100'>Contact Information</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <input type="password" value={oldPass} onChange={oldChange} placeholder='Current Password' />
                                </div>
                                <div className="input-container">
                                    <input type="password" value={newPass} onChange={passChange} placeholder='New Password' />
                                </div>
                                <div className="input-container">
                                    <input type="password" value={confNewPass} onChange={confirmNew} placeholder='Confirm New Password' />
                                </div>
                                <button className="bttn" onClick={changePass}>
                                    Confirm
                                </button>
                            </form>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    </div>
  )
}
