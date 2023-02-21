import React from "react";
import './Experience.css'
const Experience = () =>{
    return(
        <div className="experience" id='Experience'>
            <div className="achievement">
                <div className="circle">0</div>
                <span>year</span>
                <span>Experience</span>
            </div>
            
            <div className="achievement">
                <div className="circle">10</div>
                <span>completed</span>
                <span>projects</span>
            </div>

            <div className="achievement">
                <div className="circle">0</div>
                <span>companies</span>
                <span>work</span>
            </div>
        </div>
    )
}
export default Experience