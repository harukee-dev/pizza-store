import pizzaIcon from './images/pizza-icon.png'
import burgerIcon from './images/burder-icon.png'
import cupcakeIcon from './images/cupcake-icon.png'
import icecreamIcon from './images/icecream-icon.png'
import ramenIcon from './images/ramen-icon.png'
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
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <button className={cl.menuButton}>
            <img
              draggable={false}
              className={cl.buttonIcon}
              src={burgerIcon}
              alt="pizza-icon"
            />
            <p className={cl.buttonTitle}>Burger</p>
          </button>
          <button className={cl.menuButton}>
            <img
              draggable={false}
              className={cl.buttonIcon}
              src={pizzaIcon}
              alt="drinks-icon"
            />
            <p className={cl.buttonTitle}>Pizza</p>
          </button>
          <button className={cl.menuButton}>
            <img
              draggable={false}
              className={cl.buttonIcon}
              src={cupcakeIcon}
              alt="desserts-icon"
            />
            <p className={cl.buttonTitle}>Cup Cake</p>
          </button>
          <button className={cl.menuButton}>
            <img
              draggable={false}
              className={cl.buttonIcon}
              src={ramenIcon}
              alt="desserts-icon"
            />
            <p className={cl.buttonTitle}>Ramen</p>
          </button>
          <button className={cl.menuButton}>
            <img
              draggable={false}
              className={cl.buttonIcon}
              src={icecreamIcon}
              alt="desserts-icon"
            />
            <p className={cl.buttonTitle}>Ice Cream</p>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
