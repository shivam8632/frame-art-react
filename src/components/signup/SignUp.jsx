import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './SignUp.scss';
import axios from 'axios';
import {toast } from 'react-toastify';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tc, setTC] = useState('');

    const navigate = useNavigate();

    const notify = () => toast.success("User Signed Up!");

    const emailError = () => toast.error("user with this email address already exists");

    const passwordError = () => toast.error("Password and Confirm Password does not Match");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleTC = (e) => {
        setTC(e.target.value);
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };

    const userLog = localStorage.getItem('loginToken');

    const handleApi = () => {
        axios.post('http://44.201.12.222:8000/register/', {
            First_name: name,
            Last_name: lastName,
            email: email,
            password: password,
            password2: confirmPassword,
            tc: tc
        })
        .then(function(response) {
            console.log(response);
            notify();
            // navigate('/login');

        })

        .catch(function(error) {
            if(error.response.data.email) {
                emailError();
            }

            else if(error.response.data.non_field_errors) {
                passwordError()
            }
            else {
                console.log(error);
            }
            
        })
    }

    return(
        <div className="signup">
        <Container>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>First Name </label>
                        <input type="text" value={name} onChange={handleName} required />
                    </div>
                    <div className="input-container">
                        <label>Last Name </label>
                        <input type="text" value={lastName} onChange={handleLastName} />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" value={email} onChange={handleEmail} />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" value={password} onChange={handlePassword} required />
                    </div>

                    <div className="input-container">
                        <label>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPassword} required />
                    </div>

                    <div className="input-container">
                        <label>Value</label>
                        <input type="text" value={tc} onChange={handleTC} />
                    </div>
                    <div className="button-container">
                        <button className='bttn' onClick={handleApi}>Create Account</button>
                    </div>
                    <div className="input-account">
                        <p className='mt-4 mb-0'>By clicking "Create Account" you agree to Packola's Terms of Use and Privacy Policy.</p>
                        <p className='mt-2'>Already have and Account? <Link to='/login'>Sign In</Link></p>
                    </div>
                </form>
            </div>
        </Container>
      </div>
    )
}

export default SignUp;