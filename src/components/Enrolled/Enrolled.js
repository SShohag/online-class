import React from 'react';
import './Enrolled.css'

const Enrolled = (props) => {
    const addClasses = props.addClasses;
    console.log(addClasses)

    let total=0;
    for (let i = 0; i < addClasses.length; i++) {
        const course = addClasses[i];
        total = total+course.price;
        
    }
    return (
        <div className="enroll-cart">
            <h2> Purchase Summery</h2>
            <h2>Total Purchase : {addClasses.length} </h2>
            <h3>Total $ : {total} </h3>
        </div>
    );
};

export default Enrolled;