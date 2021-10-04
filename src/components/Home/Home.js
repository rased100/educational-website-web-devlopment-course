import React from 'react';
import HomeService from '../HomeService/HomeService';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="img-fluid bg-secondary p-5 ">
                <h2 className="p-5">Start learning from <br /> the world’s best institutions</h2>
                <input className="p-2" placeholder="Search our courses" type="text" /><br />
                <button className="mb-5 p-2 btn btn-primary">Search</button> <br />
                <a className="text-white" href="/">Explore all courses</a>

            </div>
            <div>
                <HomeService></HomeService>
            </div>
        </div>

    );
};

export default Home;