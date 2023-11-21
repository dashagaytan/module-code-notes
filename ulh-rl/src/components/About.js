import React from "react";
import profileImg from '../images/ruta-profile.png'
import Testimonials from '../components/Testimonials';
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="about">
            <div className="about-grid">
                <div className="about-profile-img">
                    <div className="img-container">
                        <img src={profileImg} alt="ruta-profile" className="ruta-profile-img"/>
                        <Link to="/booking"><button href="" className="service-btn">Book a Session</button></Link>

                    </div>
                </div>
                <div className="about-txt">
                    <h1 className="text-center"><strong style={{ color: '#d1b0be' }}><em>About Ruta Labutis</em></strong></h1>
                        <p>& her Unconditional Love for Healing</p>
                    <hr style={{width: '250px'}}/>
                    <p className="about-p">Hello, thank you for being here. <br/> I am Ruta Labutis, a <a style={{textDecoration: 'none', color: '#c78b8b', fontSize: '18px'}} href="https://www.thetahealing.com/" target="blank">Thetahealing <span>&#174;</span></a> practitioner, instructor and intuitive healer.
                        From an early age I have formed a deep interest in health and spirituality. While attending a University I worked on
                        continuing my journey studying and becoming a health teacher. At the age of 23 my journey became more intense.
                    <p className="about-p">I chose a massage therapy career. As I constantly continue my education in order to deepen my knowledge, be more intuitive,
                    always continue growing spiritually. Howevert there was always something missing...</p>
                    <p className="about-p"> After two decades, healing throusands I was quided to unique Theta healing technigue. </p>
                    </p>
                </div>
                <div className="theta">
                    <p className="about-p"> <a style={{textDecoration: 'none', color: '#c78b8b', fontSize: '18px'}} href="https://www.thetahealing.com/" target="blank" >Thetahealing <span>&#174;</span></a> technique was founded by Vianna Stibal 
                    few decades ago when she witnessed a complete healing of four stage cancer using
                     this technique. She created ThetaHealing to help and teach others 
                     to connect with the Creator Unconditional Love  to witness their own Miracles
                      inside and outside the body.</p>
                </div>
                <div className="theta-2">
                    <p className="about-p"> Vianna says “I am driven by a sense of purpose to show others that all things 
                    are possible when we clear our limiting beliefs. 
                    I’ve dedicated my life to the Creator to help myself and others lead healthy, joyful, loving lives.<br/> 
                    WE ARE ALL SPARKS OF GOD”.</p>
                </div>
            </div>
           <Testimonials />
        </div>
    )
}

export default About;