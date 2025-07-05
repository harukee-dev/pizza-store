import style from "./footer.module.css"
import line from "./images/Line.png"
import logo from "./images/logo.png"


export const Footer = () =>{
    return(
        <footer className={style.footer}>
            <div className={style.links}>
                    <button className={style.link}>main</button>
                    <button className={style.link}>menu</button>
                    <button className={style.link}>order</button>
                    <button className={style.link}>contact</button>
                    <div className={style.textniz}>
                    <h1>Our mission is to satisfy your hunger with tasty food, delivered quickly and at no charge</h1>
                    </div>
                    <img className={style.logo} src={logo} alt="logo" />
                    <div className={style.lineimg}>
                    <img src={line} alt="line" />
                    </div>
                <div>
                    <p>© 2025 Team Sigma. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}