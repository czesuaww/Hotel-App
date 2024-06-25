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
            <div className={styles.aboutHotel}>
                <p className={styles.aboutHotelText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>

        </div>
    )
}

export default Hotel;