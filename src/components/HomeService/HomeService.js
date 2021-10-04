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
            {/* <h2>Course: {courses.length}</h2> */}
            {
                courses.map(course =>
                    <HomeServiceFour course={course}></HomeServiceFour>
                )
                // courses.for(i = 0 i < courses.length; i++){
                // <HomeServiceFour course={course}></HomeServiceFour>
                // }
            }
            {/* {
                courses.map(course => <Services course={course}></Services>)
            } */}
        </div>
    );
};

export default HomeService;