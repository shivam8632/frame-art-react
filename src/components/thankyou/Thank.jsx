import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './thank.scss';

export default function Thank() {
  return (
    <div className="thank">
        <Container>
          <div className="heading">
              <h2>Thank You</h2>
              <p>Please check you E-mail for Order Confirmation</p>
              <div className="thank-button">
                  <Link className='bttn' to='/product'>Continue Shopping</Link>
                  <Link className='bttn' to='/'>Back to Home</Link>
              </div>
          </div>
        </Container>
    </div>
  )
}
