import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HideNav = ({children}) => {
    const location = useLocation();
    const [shownavbar,setnavbar] = useState(false)
    
   useEffect(() => {
    if(location.pathname === '/Login')
    {
        setnavbar(false)
    }
    else if(location.pathname === '/SignUp')
    {
        setnavbar(false)
    }
    else
    {
        setnavbar(true)
    }

   }, [location]) 
  
    return (
    <div>{shownavbar && children}</div>
  )
}

export default HideNav