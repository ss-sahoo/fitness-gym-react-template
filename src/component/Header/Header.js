import React, { useState } from 'react';
import './Header.css'
import Logo from "../../assets/logo.png"
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
const Header = () => {
  const mobile=window.innerWidth<=768?true:false
  const[menuopen,setMenuopen]=useState(false)
  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo'/>
      {menuopen===false&&mobile===true?(
        <div 
         style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}}
         onClick={()=>setMenuopen(true)}
         
         >
          <img src={Bars} alt='' style={{width:'1.5rem',height:'1.5rem'}} className="menu-bar"/>
          </div>
      ):(
        <ul className='header-menu'>
        <li>
          <Link  onClick={()=>setMenuopen(false)}
          activeClass="active"
          to='home'
          span={true}
          smooth={true}
          >Home</Link></li>
        <li> <Link
         onClick={()=>setMenuopen(false)}
         to='programs'
         span={true}
         smooth={true}
        >Programs</Link></li>
         <li> <Link
         onClick={()=>setMenuopen(false)}
        
         to='plans'
         span={true}
         smooth={true}
        >Plans</Link></li>
        <li> <Link
         onClick={()=>setMenuopen(false)}
        
         to='reason'
         span={true}
         smooth={true}
        >Why Us</Link></li>
        <li> <Link 
        onClick={()=>setMenuopen(false)}
        to='Testimonials'
        span={true}
        smooth={true}
        >Testimonial</Link></li>
      </ul>
      )}
      
    </div>
  )
}

export default Header
