import style from "./menuPage.module.css"
import burger from "./images/burger.png"
import pizza from "./images/pizza.png"
import cake from "./images/cake.png"
import ramen from "./images/ramen.png"
import ice from "./images/ice.png"
import { Link } from 'react-router-dom';

import pizzatest from "./images/menuMain/pizza.png"
import groupstar from "./images/menuMain/Group.png"
import pizzatrue from "./images/menuMain/pizzatrue.png"

export const MenuPage = () => {
  return (
    <div className={style.menuPage}>
      <div className={style.upredtextpapa}>
        <h2 className={style.red}>Our Selection</h2>
      </div>
      <div className={style.upblackpapa}>
        <h1 className={style.black}>A Menu That Will Always Capture Your Heart</h1>
      </div>
      <div className={style.obortkaknopok}>
<Link to="/burger" className={style.eastbutton}>
  <img className={style.kartinki} src={burger} alt="burger" />
  <h3 className={style.eattext}>Burger</h3>
</Link>

<Link to="/pizza" className={style.eastbutton}>
  <img className={style.kartinki} src={pizza} alt="pizza" />
  <h3 className={style.eattext}>Pizza</h3>
</Link>

<Link to="/cupcake" className={style.eastbutton}>
  <img className={style.kartinkicup} src={cake} alt="cake" />
  <h3 className={style.eattext}>Cup Cake</h3>
</Link>

<Link to="/ramen" className={style.eastbutton}>
  <img className={style.kartinki} src={ramen} alt="ramen" />
  <h3 className={style.eattext}>Ramen</h3>
</Link>

<Link to="/icecream" className={style.eastbutton}>
  <img className={style.kartinki} src={ice} alt="ice" />
  <h3 className={style.eattext}>Ice Cream</h3>
</Link>
      </div>




      <div className={style.cardpapa}>
        <div className={style.card}>
          <img src={pizzatrue} alt="" />
          <h1>Sausage Pizza</h1>
          <h2 className={style.prise}>$7.49</h2>
          <img src={groupstar} alt="" />
          <Link to="infoPizza">
          <h3 className={style.button}>Read More</h3>
          </Link>
        </div>
      </div>
            <div className={style.cardpapa}>
        <div className={style.card}>
          <img src={pizzatrue} alt="" />
          <h1>Sausage Pizza</h1>
          <h2 className={style.prise}>$7.49</h2>
          <img src={groupstar} alt="" />
          <Link to="infoPizza">
          <h3 className={style.button}>Read More</h3>
          </Link>
        </div>
      </div>
            <div className={style.cardpapa}>
        <div className={style.card}>
          <img src={pizzatrue} alt="" />
          <h1>Sausage Pizza</h1>
          <h2 className={style.prise}>$7.49</h2>
          <img src={groupstar} alt="" />
          <Link to="infoPizza">
          <h3 className={style.button}>Read More</h3>
          </Link>
        </div>
      </div>



    </div>
  )
}
