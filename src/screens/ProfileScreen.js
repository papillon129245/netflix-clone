import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from '../Nav';
import './ProfileScreen.css';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuybor.uz%2Fborless%2Favtobor%2Fimg%2Fuser-images%2Fuser_no_photo_512x512.png&f=1&nofb=1" 
                    alt="" />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans</h3>

                            <PlansScreen />

                            <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
