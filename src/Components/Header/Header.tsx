import pizzaLogo from './images/pizzateria-logo.png'
import userIcon from './images/user-icon.png'
import cl from './header.module.css'

export const Header = () => {
  return (
    <div className={cl.headerContainer}>
      <img
        className={cl.pizzaLogo}
        draggable={false}
        src={pizzaLogo}
        alt="logo"
      />
      <p className={cl.pizzaTitle}>Pizzateria</p>
      <button className={cl.headerLink}>Why Pizzateria?</button>
      <button className={cl.headerLink}>Menu</button>
      <button className={cl.headerLink}>Contact</button>
      <img
        className={cl.userIcon}
        draggable={false}
        src={userIcon}
        alt="user-icon"
      />
    </div>
  )
}
