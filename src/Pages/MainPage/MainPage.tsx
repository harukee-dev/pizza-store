import pizzaback from "./images/piazzaBack.png";
import style from "./mainPage.module.css"

export const MainPage = () => {
  return (
    <div>
      <img src={pizzaback} alt="pizza" className={style.pizzaback} />
      <div className={style.krug}>
      <h2>Beyond Speedy 🍕</h2>
    </div>
    <div className={style.redwhitetext}>
        <h1 style={{ color: 'white' }}>
            Ensure Your <span style={{ color: '#F54748' }}>Food</span> is Delivered with Speed
        </h1>
    </div>

    <h1 className={style.podtext}>Our mission is to satisfy your appetite with delectable dishes, delivered swiftly and at no extra cost</h1>

    <button className={style.redbutton}>
        <h1 className={style.podtext}>Get Started</h1>
    </button>
    </div>
  );
};
