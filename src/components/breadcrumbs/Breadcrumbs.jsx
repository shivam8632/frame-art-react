import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    return(
        <div className="crumbs">
<<<<<<< HEAD
            <Link to="/" >
=======
            <Link to="/home" >
>>>>>>> 7065b2c93f53f5d91ade4383afa827e5018db14d
                <FontAwesomeIcon icon={faHome} style={{ color: "#000", width: "14px", height: "14px" }} />
            </Link>
        </div>
    )
}

export default Breadcrumbs;
