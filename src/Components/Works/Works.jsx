import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'

const Works = () => {
    const transition  = {duration: 10, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
             {/* left side */}
            <div className="awesome">
                <span style = {{color: darkMode? 'white': ''}} >Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                Lorem ipsum dolor sit amet, consectetur 
                <br/>
                Ut enim ad minim veniam, quis nostrud
                <br/>
                Lorem ipsum dolor sit amet, consectetur Ut enimd
                <br/>
                Ut enim ad minim veniam, quis nostrud
                </span>
                <button className="button s-button">Hire Me</button>
                <div className="blue s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <motion.div
                 initial={{rotate: 45}}
                 whileInView={{rotate: 0}}
                 viewport={{margin: '-40px'}}
                 transition = {transition}
                 className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background Circles */}
                <div className="w-backCirlcle blueCircle"></div>
                <div className="w-backCirlcle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;