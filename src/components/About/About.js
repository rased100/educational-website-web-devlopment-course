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

            {/* -------------About Us----------------- */}

            <div className="d-flex justify-content-center m-5">
                <div className="bg-secondary m-2">
                    <img className="img-about m-2" src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/70848687_2560775357377427_8993704720900030464_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG8M8CAnFBA8eXS3vdmwEq_aB_aoQzpXbtoH9qhDOldu0JpB8rSQef2Zal5cpccNt3NHqt5cWr-r2u9xnnktQhm&_nc_ohc=M60i_i45jBIAX_T6Slm&tn=1plO74t54vDHSdfT&_nc_ht=scontent.fdac2-1.fna&oh=25d73a3ccfe8c80b91d2e80320b0922a&oe=6181B58B" alt="" />
                    <p className="color">Rasedul Islam</p>
                    <p className="color"><small>Tracher</small></p>
                </div>
                <div className="bg-secondary m-2">
                    <img className="img-about m-2" src="https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/237580104_4174361485992538_5015969048671642761_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHkgDALFU9ijJv47aE3cABTQASrXyjRNbRABKtfKNE1tDYq-pPnfyJLsOn6AbeCwbvmjCaVI9mES9JIzQ1KonQO&_nc_ohc=e_lcg-0hftgAX-8bjTL&_nc_ht=scontent.fdac2-1.fna&oh=649ae28842c0d2c32d5df7d5675c55cb&oe=61605E36" alt="" />
                    <p className="color">Dulal</p>
                    <p className="color"><small>Tracher</small></p>
                </div>
                <div className="bg-secondary m-2">
                    <img className="img-about m-2" src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/64817197_673955733053178_1278159289214566400_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEjYykHDpC1EO7gSkmim4djIY2f-lUtIW4hjZ_6VS0hbthAq3M7-xtk7Bnft89FMmTrLIMazRdAT4wkdDBXlBaq&_nc_ohc=OV02X8HKXV0AX-Gy0ns&_nc_ht=scontent.fdac2-1.fna&oh=c342e54fcdd56bef4a65cfdb7c4ea739&oe=6180B4A4" alt="" />
                    <p className="color">Abu Yakin</p>
                    <p className="color"><small>Tracher</small></p>
                </div>
                <div className="bg-secondary m-2">
                    <img className="img-about m-2" src="https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/214457608_1437981066551824_6218707229590572375_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF2xerENIogC_osqwkhSZ1mH_znx6iSf3Ef_OfHqJJ_cTpG1wd1DZKEpbKG4xA1kSLKUB2rCvf2voTH9Vx21fnb&_nc_ohc=7mp67yp7pKwAX9tjBhQ&_nc_ht=scontent.fdac2-1.fna&oh=fd5587fe1f380f5bd6578a61a25aaf6b&oe=615F415B" alt="" />
                    <p className="color">Rifat</p>
                    <p className="color"><small>Tracher</small></p>
                </div>


            </div>


        </div>
    );
};

export default About;