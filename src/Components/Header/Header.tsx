import pizzaLogo from './images/pizzateria-logo.png'
import userIcon from './images/user-icon.png'
import cl from './header.module.css'

export const Header = () => {
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
        <button className={cl.headerLink}>Menu</button>
        <button className={cl.headerLink}>Contact</button>
      </div>
      <img
        className={cl.userIcon}
        draggable={false}
        src={userIcon}
        alt="user-icon"
      />
    </div>
  )
}
