import style from "./footer.module.css"
import line from "./images/Line.png"
import logo from "./images/logo.png"
import { Link } from "react-router-dom"


export const Footer = () =>{
    return(
        <footer className={style.footer}>
            <div className={style.links}>
                <div className={style.linkpapa}>
                    <h2 className={style.papa}>Papa Pizza</h2>
                </div>
                    <Link to="/" className={style.link}>Main</Link>
                    <Link to="/Menu" className={style.link}>Menu</Link>
                    <Link to="/Order" className={style.link}>Order</Link>
                    <Link to="/Contact" className={style.link}>Contact</Link>
                    <div className={style.textnizpapa}>
                    <h1 className={style.textniz}>Our mission is to satisfy your hunger with tasty food, delivered quickly and at no charge</h1>
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