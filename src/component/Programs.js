import React from 'react';
import './Program.css';
import {programsData} from '../../src/data/programsData.js';
import RightArrow from '../../src/assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
  
        </div>


        <div className="programs-categories">
          {programsData.map((program)=>(
            <div className="categories">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Programs
