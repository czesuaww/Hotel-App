import React, { useState } from "react";
import styles from './searchbar.module.css';

const SearchBar = () => {
    const [term, setTerm] = useState('');

    const search = () => console.log('szukaj', term);

    const updateTerm = e => setTerm(e.target.value);

    return (
        <div className={styles.container}>
            <div className={styles.inputSearchContainer}>
                <input
                    value={term}
                    onChange={updateTerm}
                    className={styles.inputSearch}
                    type="text"
                    placeholder="Szukaj..."
                />
            </div>
            <div className={styles.buttonContainer}>
                <button
                    onClick={search}
                    className={styles.searchButton}>
                    Szukaj
                </button>
            </div>
        </div>
    )

}

export default SearchBar;