import React from 'react';
import SingleProduct from './SingleProduct';
import { Container } from 'react-bootstrap';
import {CartState} from '../context/UserContext';
import './sale.scss'

export default function Products() {
    const { state: { products } } = CartState();
    console.log('Products Check', products)
  return (
    <Container>
        <div className="product-container">
        {
          products?.map((prod) => {
            return (
              <SingleProduct prod={prod} key={prod.id} />
            )
          })
        }
      </div>
    </Container>
  )
}
