import React from 'react';
import styles from './Products.module.css';

function Products() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="https://via.placeholder.com/300x200.png?text=Product+1" alt="Product 1" />
                <h2>Product 1</h2>
                <p>This is the description for Product 1.</p>
                <button>Add to Cart</button>
            </div>
            <div className={styles.card}>
                <img src="https://via.placeholder.com/300x200.png?text=Product+2" alt="Product 2" />
                <h2>Product 2</h2>
                <p>This is the description for Product 2.</p>
                <button>Add to Cart</button>
            </div>
            <div className={styles.card}>
                <img src="https://via.placeholder.com/300x200.png?text=Product+3" alt="Product 3" />
                <h2>Product 3</h2>
                <p>This is the description for Product 3.</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default Products;
