import React from 'react'
import './Navigation.css'
import useWindowResize from '../hooks/useWindowResize'
import MobileMenu from '../Navigation/MobileMenu/MobileMenu'
import DesktopMenu from '../Navigation/DesktopMenu/DesktopMenu'


const Navigation = () => {

  const {width} = useWindowResize()
  
  return (
    <>
      {width < 650 ? <MobileMenu /> : <DesktopMenu /> }
    </>
  )
}

export default Navigation
