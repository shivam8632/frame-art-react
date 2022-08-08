import React from 'react';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProductFeature.scss'

import Dimensions from '../../../assets/img/dimensions.png';
import Minimum from '../../../assets/img/minimum.png';
import Printing from '../../../assets/img/printing.png';
import DesignTool from '../../../assets/img/design-tool.png';
import CustomerService from '../../../assets/img/customer-service.png';
import Recycle from '../../../assets/img/recycle.png';

const ProductFeature = () => {
    return(
        <div className="product-features">
            <Container>
            <Row>
                <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Dimensions} alt="feature" />
                    <p style={{ textAlign: 'center' }}>Custom Dimensions</p>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Minimum} alt="feature" />
                    <p style={{ textAlign: 'center' }}>Custom Dimensions</p>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Printing} alt="feature" />
                    <p style={{ textAlign: 'center' }}>Custom Dimensions</p>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={DesignTool} alt="feature" />
                    <p style={{ textAlign: 'center' }}>Custom Dimensions</p>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={CustomerService} alt="feature" />
                    <p style={{ textAlign: 'center' }}>Custom Dimensions</p>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Recycle} alt="feature" />
                    <p style={{ textAlign: 'center' }}>Custom Dimensions</p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ProductFeature;