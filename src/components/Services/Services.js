import React from 'react';

const Services = (props) => {
    const { courseName, teacher, price, img } = props.course;
    return (
        // services
        <div className="d-flex justify-content-center m-3">
            <div className="homeCourse bg-info">
                <img src={img} alt="" />
                <h4>{courseName}</h4>
                <p>Teacher: {teacher}</p>
                <p>Price: ${price}</p>
                <button className="mb-5 btn btn-warning">Buy Now</button>
            </div>
        </div>
    );
};
export default Services;