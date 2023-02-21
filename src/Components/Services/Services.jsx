import React from 'react' 
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../../resume/Resume.pdf'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'
const Services = () => {

    const transition  = {duration: 2.5, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style = {{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>Services</span>
                <span>
                Lorem ipsum dolor sit amet, consectetur 
                <br/>
                Ut enim ad minim veniam, quis nostrud
                </span>

                <a href= {Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                
                <div className="blue s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>

            {/* right side */}
            <div className="cards">
                {/* first card */}
               <motion.div
               whileInView={{left: '35rem'}}
                initial = {{left: '70rem'}}
                transition = {transition}
                style={{left: '35rem'}}>
                 <Card
                    emoji = {HeartEmoji}
                    heading = 'Design'
                    detail = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
                />
               </motion.div>

                {/* second card */}
                <motion.div
                whileInView={{top: '10rem', left: '20rem'}}
                initial = {{top: '-10%'}}
                transition = {transition}
                 style={{top: '10rem', left: '20rem'}}>
                 <Card
                    emoji = {Glasses}
                    heading = 'Frontend Developer'
                    detail = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo"}
                 />
                </motion.div>

                {/* third card */}
                <motion.div
                whileInView={{top: '19rem', left: '35rem'}}
                initial = {{top: '-10%'}}
                transition = {transition}
                 style={{top: '19rem', left: '35rem'}}>
                 <Card
                    emoji = {Humble}
                    heading = 'Backend Developer'
                    detail={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm"}
                 />
                </motion.div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services