import pizzaImage from './images/pizza-image.png'
import cl from './errorPage.module.css'

export const ErrorPage = () => {
  return (
    <div className={cl.pageContainer}>
      <div className={cl.titleContainer}>
        <h1 className={cl.four}>4</h1>
        <img src={pizzaImage} alt="pizza-image" />
        <h1 className={cl.four}>4</h1>
      </div>
      <h2 className={cl.title}>Whoops... Page Not Found</h2>
      <p className={cl.subtitle}>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable
      </p>
      <button className={cl.button}>GO TO HOMEPAGE</button>
    </div>
  )
}
