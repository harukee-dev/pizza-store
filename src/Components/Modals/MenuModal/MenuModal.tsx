import pizzaIcon from './images/pizza-icon.jpg'
import drinksIcon from './images/drinks-icon.png'
import dessertsIcon from './images/desserts-icon.png'
import cl from './menuModal.module.css'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface IMenuModal {
  modal: string
}

export const MenuModal: React.FC<IMenuModal> = ({ modal }) => {
  return (
    <AnimatePresence>
      {modal === 'menu' && (
        <motion.div
          key="menu-modal"
          className={cl.menuContainer}
          initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <button className={cl.menuButton}>
            <img
              draggable={false}
              className={cl.buttonIcon}
              src={pizzaIcon}
              alt="pizza-icon"
            />
            <p className={cl.buttonTitle}>Pizza</p>
          </button>
          <button className={cl.menuButton}>
            <img
              draggable={false}
              className={cl.buttonIcon}
              src={drinksIcon}
              alt="drinks-icon"
            />
            <p className={cl.buttonTitle}>Drinks</p>
          </button>
          <button className={cl.menuButton}>
            <img
              draggable={false}
              className={cl.buttonIcon}
              src={dessertsIcon}
              alt="desserts-icon"
            />
            <p className={cl.buttonTitle}>Desserts</p>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
