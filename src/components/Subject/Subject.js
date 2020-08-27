import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Subject.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Subject = (props) => {
    console.log(props)
    const{name, price, instructor, img} = props.classes;
    const handleEnrolled = props.handleEnrolled;
    return (
        <div className='subject-container'>
            <div className='course-picture'>
                <img src={img} alt=""/>
            </div>
            <div className='course-data'>
                <h2> Course Name : {name} </h2>
                <h4> Instructor : {instructor} </h4>
                <br/>
                <h3> <strong>$ {price}</strong> </h3>
                <br/>
                <br/>
                <button class="btn btn-success"onClick={()=> handleEnrolled(props.classes)} > <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
            </div>
        </div>
    );
};

export default Subject;