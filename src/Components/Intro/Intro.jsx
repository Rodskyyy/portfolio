import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import profile from '../../img/profile.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'

const Intro = () => {

    const transition  = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
   

    return(
      <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style = {{color: darkMode? 'white': ''}}>Hi! I am </span>
                <span>Rodney Tabugon </span>
                <span>
                    Frontend Developer with low level of experience in web designing
                    and development
                </span>
            </div>

            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="https://github.com/Rodskyyy" rel="noreferrer" target="_blank">
                    <img src={Github} alt="" />
                </a>
                
                <a href="https://www.linkedin.com/in/rodney-tabugon-a09788260/" rel="noreferrer" target="_blank">
                    <img src={LinkedIn} alt="" />
                </a>
                
                
                    <img src={Instagram} alt="" />  
                
                
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={profile} alt="" />

            <motion.img
            initial={{left: '-36%'}}
            whileInView = {{left: '-24%'}}
            transition = {transition}
            src={glassesimoji} alt="" />

            <motion.div
             initial={{top: '-4%', left: '74%'}}
             whileInView={{left: '68%'}}
             transition = {transition}
             style={{top: '-4%', left: '68%'}}
             className = 'floating-div' >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div
             initial={{left: '10rem', top: '18rem'}}
             whileInView={{left: '-6rem'}}
             transition={transition}
             style={{top: '17rem', left: '-6rem', height: '50vh'}}
             className = 'floating-div' >
                <FloatingDiv image={thumbup} txt1='Best Employee' txt2='Award' />
            </motion.div>

        {/* blur divs */}
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>

        </div>
      </div>  
    )
}

export default Intro