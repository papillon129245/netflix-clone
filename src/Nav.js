import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Nav.css';

function Nav() {

const [show, handleShow] = useState(false);
const history = useHistory();

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);    
    }   else {
        handleShow(false)
    }
}

useEffect(() => {
window.addEventListener("scroll", transitionNavBar);
return () => window.removeEventListener("scroll", transitionNavBar);    
}, []);

    return (
        <div className={`nav ${show && `nav__black`}`}>
            <div className='nav__content'>
                <img 
                onClick={() => history.push('/')}
                className='nav__logo' src="http://www.freepnglogos.com/uploads/netflix-logo-0.png" alt='' /> 
                <img
                onClick={() => history.push('/profile')}
                className='nav__avatar' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuybor.uz%2Fborless%2Favtobor%2Fimg%2Fuser-images%2Fuser_no_photo_512x512.png&f=1&nofb=1" alt='' />
            </div>
        </div>
    )
}

export default Nav

 