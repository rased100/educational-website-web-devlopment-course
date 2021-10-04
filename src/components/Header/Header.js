import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const style = {
        fontWeight: "bold",
        color: "yellow"
    };
    return (

        // -------------This is Header-----------------

        <div className="w-100 nav d-flex d-flex justify-content-around bg-primary p-5">
            <div>
                <h2 className="color">WD-Course</h2>
            </div>
            <div className="d-flex">
                <NavLink className="nav color" activeStyle={style} to="/home">Home</NavLink>
                <NavLink className="nav color" activeStyle={style} to="/about">About</NavLink>
                <NavLink className="nav color" activeStyle={style} to="/services">Services</NavLink>
                <NavLink className="nav color" activeStyle={style} to="/contuctus">Contuct Us</NavLink>
            </div>
        </div>
    );
};

export default Header;