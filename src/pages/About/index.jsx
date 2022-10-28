import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import useMouse from '../../hooks/useMouse'

const {useEffect} = React
const About = () => {
  const {mouse,handleMouseMove} = useMouse()
  useEffect(()=>{
    document.addEventListener('mousemove',handleMouseMove)
    return ()=>{
      document.removeEventListener('mousemove',handleMouseMove)
    }
  },[])
  return (
   <>
      <div>About</div>
      <div>asdasdasd{JSON.stringify(mouse)}</div>
   </>
  )
}

export default About