import React, { useEffect, useState } from 'react';
import HomeServiceFour from '../HomeServiceFour/HomeServiceFour';
import Services from '../Services/Services';

const HomeService = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./devlopment.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {
                courses.map(course =>
                    < HomeServiceFour course={course} ></HomeServiceFour>
                )
            }
        </div >
    );
};

export default HomeService;