import React from 'react'
import './Navbar.css'
import logo from '../assets/kalv.png'



const Navbar = () => {
  return (
    <div>
        
            <div className='navbar'>
              
            <img src={logo} alt="" className='logo'/><br></br>
                    
                <ul>
                    <li>Home</li>
                    <li>Taught Courses</li>
                    <li>Research Courses</li>
                    <li>Universities</li>
                    <li>Accommodation</li>
                    <li>Visa & Immigration</li>
                    
                </ul>
             
                
            </div>
            
  
   </div>
   
      )
}

export default Navbar