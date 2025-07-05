import pizzaLogo from './images/pizzateria-logo.png'
import userIcon from './images/user-icon.png'
import cl from './header.module.css'
import React, { useState } from 'react'
import { MenuModal } from '../Modals/MenuModal/MenuModal'
import { AnimatePresence, motion } from 'framer-motion'

export const Header = () => {
  const [modal, setModal] = useState<string>('none')

  const handleMenu = () => {
    if (modal === 'menu') setModal('none')
    else setModal('menu')
  }

  return (
    <div className={cl.headerContainer}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          className={cl.pizzaLogo}
          draggable={false}
          src={pizzaLogo}
          alt="logo"
        />
        <p className={cl.pizzaTitle}>Pizzateria</p>
      </div>
      <div className={cl.interactionContainer}>
        <button className={cl.headerLink}>Why Pizzateria?</button>
        <button onClick={handleMenu} className={cl.headerLink}>
          Menu
        </button>
        <button className={cl.headerLink}>Contact</button>
      </div>
      <img
        className={cl.userIcon}
        draggable={false}
        src={userIcon}
        alt="user-icon"
      />
      <MenuModal modal={modal} />
    </div>
  )
}
