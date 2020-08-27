import React from 'react';

const Enrolled = (props) => {
    const addClasses = props.addClasses;
    console.log(addClasses)

    let total=0;
    for (let i = 0; i < addClasses.length; i++) {
        const course = addClasses[i];
        total = total+course.price;
        
    }
    return (
        <div>
            <h2> Enrolled Summery</h2>
            <h2>Enrolled total : {addClasses.length} </h2>
            <h3>Total $ : {total} </h3>
        </div>
    );
};

export default Enrolled;