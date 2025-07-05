import pizzaback from './images/piazzaBack.png'
import pizza from './images/Pizza.png'
import card1 from './images/card/card1.png'
import card2 from './images/card/card2.png'
import card3 from './images/card/card3.png'
import pizzaredback from './images/pizzaredback.png'
import humanface from './images/humanface.png'
import star from './images/star.png'
import style from './mainPage.module.css'

export const MainPage = () => {
  return (
    <div>
      <img
        draggable={false}
        src={pizzaback}
        alt="pizza"
        className={style.pizzaback}
      />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <div className={style.krug}>
          <h2>Beyond Speedy </h2> <img src={pizza} alt="pizza" />
        </div>
      </div>
      <div className={style.redwhitetext}>
        <h1 style={{ color: 'white' }}>
          Ensure Your <span className={style.spanTitle}>Food</span> is Delivered
          with Speed
        </h1>
      </div>

      <h1 className={style.podtext}>
        Our mission is to satisfy your appetite with delectable dishes,
        delivered swiftly and at no extra cost
      </h1>

      <button className={style.redbutton}>
        <h1 className={style.textinbutton}>Get Started</h1>
      </button>

      <div className={style.whiteback}>
        <h2 className={style.redtext}>Our Offerings</h2>

        <h1 className={style.blacktext}>
          Your Preferred Food Delivery Companion
        </h1>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <img draggable={false} src={card1} alt="card1" />
            <h1 className={style.blacktext}>Convenient Ordering</h1>
            <h2 className={style.textgrey}>
              Ordering food requires just a few simple steps
            </h2>
          </div>
          <div className={style.card}>
            <img draggable={false} src={card2} alt="card2" />
            <h1 className={style.blacktext}>Quickest Delivery</h1>
            <h2 className={style.textgrey}>
              Consistently Timely Delivery, Even Faster
            </h2>
          </div>
          <div className={style.card}>
            <img draggable={false} src={card3} alt="card3" />
            <h1 className={style.blacktext}>Superior Quality</h1>
            <h2 className={style.textgrey}>
              For us, quality is paramount, not just speed
            </h2>
          </div>
        </div>
        <div className={style.redback}>
          <div>
            <h2>Customer Testimonials</h2>
            <h1 className={style.blacktext}>
              What Customers Have to Say About Us
            </h1>
            <h3 className={style.podtext}>
              "Pizzateria is exceptional. With a wide array of delicious meals
              and excellent service, including remarkably fast delivery, I
              wholeheartedly recommend Pizzateria to you."
            </h3>
            <img
              draggable={false}
              className={style.humanface}
              src={humanface}
              alt="human face"
            />
            <h4>Aracelly Xaviera</h4>
            <h5 className={style.textinbutton}>Culinary Enthusiast</h5>
            <img
              draggable={false}
              className={style.star}
              src={star}
              alt="star"
            />
          </div>
          <img
            draggable={false}
            className={style.pizzaredback}
            src={pizzaredback}
            alt="pizza"
          />
        </div>
      </div>
    </div>
  )
}
