import React from 'react';
import Dimension from './dimensions/Dimensions';
import Printed from './printed-sides/Printed';
import Paper from './paper/Paper';
import Related from './related/Related';
import Coating from './coating/Coating';

const Specification = () => {
    return(
        <div className="specifications" id="specifications">
            <Dimension />
            <Printed />
            <Paper />
            <Coating />
            <Related />
        </div>
    )
}

export default Specification;