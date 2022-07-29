import React from 'react';
import Container from 'react-bootstrap/Container';
import CustomBox from './custom-box/CustomBox';

const Overview = () => {
    return(
        <div className="overview" id='overview'>
            <Container>
                <div className="heading">
                    <h2 className='text-center'>Custom Product Boxes</h2>
                </div>
                <CustomBox />
            </Container>
        </div>
    )
}

export default Overview