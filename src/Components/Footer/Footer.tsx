import style from "./footer.module.css"
import line from "./images/Line.png"
import logo from "./images/logo.png"


export const Footer = () =>{
    return(
        <footer className={style.footer}>
            <div className={style.links}>
                <div className={style.linkpapa}>
                    <h2 className={style.papa}>Papa Pizza</h2>
                </div>
                    <button className={style.link}>Main</button>
                    <button className={style.link}>Menu</button>
                    <button className={style.link}>Order</button>
                    <button className={style.link}>Contact</button>
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