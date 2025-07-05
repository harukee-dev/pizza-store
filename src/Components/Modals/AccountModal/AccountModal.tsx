import React from 'react'
import cl from './accountModal.module.css'
import { AnimatePresence, motion } from 'framer-motion'

interface IAccountModal {
  modal: string
}

export const AccountModal: React.FC<IAccountModal> = ({ modal }) => {
  return (
    <AnimatePresence>
      {modal === 'user' && (
        <motion.div
          initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cl.modalContainer}
        >
          <button className={cl.modalButton}>My Orders</button>
          <button className={cl.modalButton}>Logout</button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
