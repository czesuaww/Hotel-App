import React from "react";
import style from './menu.module.css';

const Menu = () => {
    return (
        <div className={style.menuContainer}>
            <ul className={style.menu}>
                <li className={style.menuItem}>
                    <a href="https://google.com">Home</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;