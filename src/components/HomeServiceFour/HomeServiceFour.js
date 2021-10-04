import React from 'react';
import './HomeServiceFour.css';

const HomeServiceFour = (props) => {
    const { courseName, teacher, price, img } = props.course;
    return (
        <div className="d-flex justify-content-center m-3">
            <div className="homeCourse bg-info">
                <img src={img} alt="" />
                <h4>{courseName}</h4>
                <p>Teacher: {teacher}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default HomeServiceFour;