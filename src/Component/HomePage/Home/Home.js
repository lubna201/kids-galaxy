import React from 'react';
import ContactSend from '../../Contact/ContactSend/ContactSend';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="container mt-5 pt-5">
            <Header></Header>
            <Courses></Courses>
            <ContactSend></ContactSend>
        </div>
    );
};

export default Home;