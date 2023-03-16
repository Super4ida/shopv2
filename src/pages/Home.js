import React from 'react';
import styles from './Home.module.css'

function Home() {
    return (
        <div>
            <h1 className={styles.h1}>Welcome to My Shop</h1>
            <p className={styles.p}>Here, you can find all kinds of amazing products.</p>
        </div>
    );
}

export default Home;
