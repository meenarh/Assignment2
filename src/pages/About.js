import React from 'react'
import { NavLink} from 'react-router-dom'
const About = () => {
  return (
    <div>
        <h1>This is the About page</h1>
        <NavLink className='link' style={({isActive}) => ({
        color: isActive ? 'green' :  ''
       })}  to='/about'><p >About</p></NavLink>
       <NavLink className='link' to='/'><p >Home</p></NavLink>
    </div>
  )
}

export default About