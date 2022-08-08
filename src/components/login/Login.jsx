import React, { useState, useEffect, useContext } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {toast } from 'react-toastify';
import UserContext from '../context/UserContext';


const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAuth}= useContext(UserContext); //Login Context

    const navigate = useNavigate();

    const notify = () => toast.success("Logged in Successfully!");
    const wrongData = () => toast.warn("Please enter correct Email or Password");
    const emptyData = () => toast.warn("Please fill out all the fields");

    const handleEmail = (e) => {
      setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };

    const handleLogin = () => {
      axios.post('http://44.201.12.222:8000/login/', {
          email: email,
          password: password,
      })
      .then(function(response) {
          console.log(response);
          notify();
          localStorage.setItem('loginToken', response.data.token.access);
          localStorage.setItem('logInInfo', response.config.data)
          console.log("Local Storage", localStorage.getItem('loginToken'))
  
          var token = localStorage.getItem('loginToken');
          if(token != null){
            console.log('Get Login Token', token)
            axios.get('http://44.201.12.222:8000/userprofile/', {
                headers: {"Authorization": `Bearer ${token}`}
            })
            .then((res)=>{
              setAuth({
                user_name: res.data.First_name
              })
                console.log('profile Get', res.data.First_name);
            })
    
            .catch(function(error) {
                console.log(error.response);
                
            })
    
        }
          console.log("Success"); 
          navigate('/');
      })
      .catch(function(error) {
        if(error.response.data.errors) {
          wrongData();
        }
        else if(error.response.data.email || error.response.data.password) {
          emptyData();
        }

        else {
          console.log(error.response);
        }
          
      })
      
  }


  const renderForm = (
      <form onSubmit={handleSubmit}>
        <div className="input-container">
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmail} />
        </div>
        <div className="input-container">
            <label>Password </label>
            <input type="password" value={password} onChange={handlePassword} />
        </div>
        <div className="button-container">
            <button className='bttn' onClick={handleLogin}>Submit</button>
        </div>
        <div className="input-account">
          <Link to='/'>Forget Password</Link>
          <p className='mt-4 mb-0'>Don't have an Account</p>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </form>
  );

  return(
    <div className="login">
      <Container>
        <div className="login-container">
            <h2 className="title">Sign In</h2>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </Container>
    </div>
  )
}

export default Login;