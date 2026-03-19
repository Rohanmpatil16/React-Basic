
import style from "./Navigation.module.css"

const Navigation = () => {
  return (
<nav className={style.container}>
    <div className={style.nav}>
    <img className={style.logo} src="./images/image.png" alt="logo" />
    </div>

    <ul>
        <li>Home</li>
                <li>About</li>

        <li>Contact</li>
        </ul>
</nav>
  )
}

export default Navigation