import React from "react";
import styles from './header.module.css';
import SearchBar from "../Searchbar/searchbar";

const Header = () => {
    console.log(styles);
    return (
        <header className={styles.header}>
            <SearchBar />
        </header>
    );
}

export default Header;