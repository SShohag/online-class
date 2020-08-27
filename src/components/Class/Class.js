import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Class.css'
import Subject from '../Subject/Subject';
import Enrolled from '../Enrolled/Enrolled';

const Class = () => {
    // console.log(fakeData);
    const first12 = fakeData.slice(0, 12)
    const [classes, setClasses] = useState(first12);
    const [addClasses, setAddClasses] = useState([]);

    const handleEnrolled = (classes)=>{
        const newAddClasses = [...addClasses, classes];
        setAddClasses(newAddClasses);
    }
    return (
        <div className='classes'>
            <div className="course-container">
                {
                    classes.map(course=> <Subject handleEnrolled={handleEnrolled} classes={course}></Subject> )
                }
            </div>
            <div className="cart-container">
                <Enrolled addClasses={addClasses}></Enrolled>
            </div>
        </div>
    );
};

export default Class;