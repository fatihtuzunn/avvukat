import React from 'react';
import styles from "./Card.module.scss"

const Cards = () => {
    return (
        <div className={styles.cards}>

            <div >
                <div className="text-center">
                    <p className="kicker">Trusted Worldwide</p>
                    <h2>Designed for business teams like yours</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className={styles.pageContent}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Mountain View</h2>
                        <p className={styles.copy}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className={styles.btn}>View Trips</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Mountain View</h2>
                        <p className={styles.copy}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className={styles.btn}>View Trips</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Mountain View</h2>
                        <p className={styles.copy}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className={styles.btn}>View Trips</button>
                    </div>
                </div><div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Mountain View</h2>
                        <p className={styles.copy}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className={styles.btn}>View Trips</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
