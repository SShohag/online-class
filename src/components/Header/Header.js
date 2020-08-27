import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='heading'><strong>Online Courses</strong></h1>
            <nav>
                <a href="/course">Courses</a>
                <a href="/instructor">Teachers</a>
                <a href="/rules">Design</a>
            </nav>
        </div>
    );
};

export default Header;