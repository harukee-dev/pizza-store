import pizzaIcon from './images/pizza-icon.jpg'
import drinksIcon from './images/drinks-icon.png'
import dessertsIcon from './images/desserts-icon.png'
import cl from './menuModal.module.css'

export const MenuModal = () => {
  return (
    <div className={cl.menuContainer}>
      <button className={cl.menuButton}>
        <img className={cl.buttonIcon} src={pizzaIcon} alt="pizza-icon" />
        <p className={cl.buttonTitle}>Pizza</p>
      </button>
      <button className={cl.menuButton}>
        <img className={cl.buttonIcon} src={drinksIcon} alt="drinks-icon" />
        <p className={cl.buttonTitle}>Drinks</p>
      </button>
      <button className={cl.menuButton}>
        <img className={cl.buttonIcon} src={dessertsIcon} alt="desserts-icon" />
        <p className={cl.buttonTitle}>Desserts</p>
      </button>
    </div>
  )
}
