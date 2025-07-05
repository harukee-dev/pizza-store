import pizzaLogo from './images/pizzateria-logo.png'
import userIcon from './images/user-icon.png'
import cl from './header.module.css'
import { useState } from 'react'
import { MenuModal } from '../Modals/MenuModal/MenuModal'
import { AccountModal } from '../Modals/AccountModal/AccountModal'

export const Header = () => {
  const [modal, setModal] = useState<string>('none')

  const handleMenu = () => {
    if (modal === 'menu') setModal('none')
    else setModal('menu')
  }

  const handleUser = () => {
    if (modal === 'user') setModal('none')
    else setModal('user')
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
        onClick={handleUser}
        className={cl.userIcon}
        draggable={false}
        src={userIcon}
        alt="user-icon"
      />
      <AccountModal modal={modal} />
      <MenuModal modal={modal} />
    </div>
  )
}
