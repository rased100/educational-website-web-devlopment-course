import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

// Get data from json file

const ServicesAll = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses)
    useEffect(() => {
        fetch('./devlopment.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {
                courses.map(course => <Services key={course.sl} course={course}></Services>)
            }
        </div>
    );
};

export default ServicesAll;