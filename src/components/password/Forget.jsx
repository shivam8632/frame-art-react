import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { API } from '../../config/api';

import './password.scss';

export default function Forget() {
    const [email, setEmail] = useState('');
    const [successData, setSuccessData] = useState('');
    const [errorData, setErrorData] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };

    const handleForget = () => {
        axios.post(API.BASE_URL + 'send-reset-password-email/', {
            email: email,
        })
        .then(function(response) {
            console.log(response);
            console.log("Success");
            setSuccessData(response.data.msg)
            
        })
        .catch(function(error) {
            console.log(error);
            setErrorData(error.response.data.non_field_errors[0]);
            
        })
        
      }
  return (
    <div className='forget-container'>
        <Container>
            <div className="heading mb-5">
                <h2>Forgot Password</h2>
            </div>
            <form  onSubmit={handleSubmit}>
                <div className="input-container d-flex flex-column justify-content-center align-items-center">
                    <label className='text-left mb-2'>Enter you Email</label>
                    <input type="email" value={email} onChange={handleEmail} />
                    <button className="bttn mt-4" onClick={handleForget}>Send Link</button>
                </div>
            </form>
            {successData? (
                <p className='text-center mt-3'>{successData}</p>
            ) :
            ''
            }

            {errorData ? (
                <p className="text-center mt-3 error">{errorData}</p>
            ) :
            ''
            }
        </Container>
    </div>
  )
}
