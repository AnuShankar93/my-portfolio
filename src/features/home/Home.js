import React from 'react';
import Body from './components/body/Body';
import Header from './components/header/Header';
import './home.css';

 const Home = () => {
    return (
        <div className="home">
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
        </div>
    )
}

export default Home
