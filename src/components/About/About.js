import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="bg-info py-5">
            <h2>About Us</h2>
            <div className="text-center">
                <p>There are three commitments we've made to the world. We've been grounded by these since day one:</p>
                <li>Increase access to high-quality education for everyone, everywhere</li>
                <li>Enhance teaching and learning on campus and online</li>
                <li>Advance teaching and learning through research</li>
            </div>
            <div>
                <div>
                    <img className="img-about" src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/70848687_2560775357377427_8993704720900030464_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG8M8CAnFBA8eXS3vdmwEq_aB_aoQzpXbtoH9qhDOldu0JpB8rSQef2Zal5cpccNt3NHqt5cWr-r2u9xnnktQhm&_nc_ohc=M60i_i45jBIAX_T6Slm&tn=1plO74t54vDHSdfT&_nc_ht=scontent.fdac2-1.fna&oh=25d73a3ccfe8c80b91d2e80320b0922a&oe=6181B58B" alt="" />
                    <p>Rasedul Islam</p>
                    <p><small>Tracher</small></p>
                </div>
            </div>


        </div>
    );
};

export default About;