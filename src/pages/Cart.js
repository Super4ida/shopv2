import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
    const { cartItems, clearCart } = useContext(CartContext);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Cart</h1>
            <div className={styles.items}>
                {cartItems.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <img src={item.image} alt={item.title} className={styles.image} />
                        <div className={styles.details}>
                            <h2 className={styles.name}>{item.title}</h2>
                            <p className={styles.price}>${item.price}</p>
                            <p className={styles.quantity}>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.total}>
                <h2 className={styles.totalTitle}>Total:</h2>
                <p className={styles.totalPrice}>${getTotalPrice()}</p>
            </div>
            <button className={styles.clearButton} onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
