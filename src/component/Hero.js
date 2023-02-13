import React from 'react';
import Header from './Header/Header';
import './Hero.css';
import hero_image from "../../src/assets/hero_image.png";
import hero_image_back from "../../src/assets/hero_image_back.png";
import Heart from '../../src/assets/heart.png'
import Calories from "../../src/assets/calories.png";
import {motion} from 'framer-motion'
import NumberCouter from 'number-counter'
function Hero() {
  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768?true:false
  return (
    <div className='hero' id='home'>
      <div className="blur blur-h"></div>
      <div className="left-h">
        < Header/>

      <div className="the-best-ad">
        <motion.div 
         initial={{left:mobile?'165px':'238px'}}
         whileInView={{left:'8px'}}
         transition={{...transition,type:'tween'}}
        ></motion.div>
        <span>The best fitness club int he town</span>
      </div>

      <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span></div>
      <div><span>
        Ideal Body</span></div>
        <div><span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas, impedit vitae qui necessitatibus cupiditate.
          </span>
        </div>
      </div>

      <div className="figure">
        <div>
          <span><NumberCouter end={140} start={100} delay='4'preFix="+"/></span>
          <span>Expert coaches</span>
          </div>
        <div>
          <span><NumberCouter end={980} start={800} delay='4'preFix="+"/></span>
          <span>memberd joined</span>
        </div>
        <div>
         <span><NumberCouter end={50} start={0} delay='4'preFix="+"/></span>
          <span>Fitness Programs</span>
        </div>
      </div>

      <div className="hero-button">
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
      </div>
      </div>
      <div className="rigth-h">
        <button className='btn'>Join Now</button>

        <motion.div 
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
         transition={transition}
        
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>


        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className='hero-img-back' />

        <motion.div
         initial={{right:'37rem'}}
         whileInView={{right:'28rem'}}
          transition={transition}
        className="calories">
           <img src={Calories} alt="" />
           <div>
             <span>Calories Burned</span>
             <span>220 kcal</span>
           </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
