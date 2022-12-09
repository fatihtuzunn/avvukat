import React from 'react';
import styles from "./Card.module.scss"

const Cards = () => {
    return (
        <div className={styles.cards}>

            <div >
                <div className="text-center">
                    <p className="kicker">Trusted Worldwide</p>
                    <h2>Sizler için çalışıyoruz</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className={styles.pageContent}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Avukatlar</h2>
                        <p className={styles.copy}>Avukatları matbu evrak işlerinden kurtarıp, mesleklerinin asıl doğasını geri kazandırıyoruz.</p>
                        <button className={styles.btn}>View Trips</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>İlgililer</h2>
                        <p className={styles.copy}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className={styles.btn}>View Trips</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Hukuk Çalışanları</h2>
                        <p className={styles.copy}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className={styles.btn}>View Trips</button>
                    </div>
                </div><div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Şirketler</h2>
                        <p className={styles.copy}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className={styles.btn}>View Trips</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
