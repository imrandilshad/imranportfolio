import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
// import {
//     Container
// } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="port-home-container">
            {/*<Container>*/}
                {/*<div className="page-info">
                    <div className="page-title">Hello, I'm Adeel</div>
                    <div className="page-desc">
                        I'm a React Js front-end web developer
                    </div>
                </div>*/}
            	<div className="content-box">
            		<div className="name">
            			Hello, I'm Adeel
            		</div>
            		<div className="describe">
            			I'm a React Js front-end web developer
            		</div>
                    <NavLink to="/portfolio">
                		<div className="custom-button">
                			<div>View My Work</div>
                			<FontAwesomeIcon className="icon" icon={faArrowRight} />
                		</div>
                    </NavLink>
            	</div>
            {/*</Container>*/}
        </div>
    );
};

export default Home;
