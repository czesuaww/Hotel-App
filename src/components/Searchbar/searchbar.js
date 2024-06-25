import React from "react";
import styles from './searchbar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputSearchContainer}>
                <input
                    className={styles.inputSearch}
                    type="text"
                    placeholder="Szukaj..."
                />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.searchButton} >Szukaj</button>
            </div>
        </div>
    )

}

export default SearchBar;