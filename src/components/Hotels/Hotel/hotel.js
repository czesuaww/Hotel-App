import React from 'react';
import styles from './hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

console.log(hotelImg);

const Hotel = () => {
    return (
        <div className={styles.hotelContainer}>
            <div className={styles.hotel}>
                <img
                    src={hotelImg}
                    alt='hotel-pictur'
                    className={styles.hotelImg} />
                <div className={styles.hotelInfoContainer}>
                    <p className={styles.hotelName}>Pensjonaty</p>
                    <p className={styles.hotelCity}>Warszawa</p>
                </div>
                <div className={styles.moreInfo}>
                    <p className={styles.score}>Ocena 8.3</p>
                    <button className={styles.showOffer}>Pokaż</button>
                </div>
            </div>

        </div>
    )
}

export default Hotel;