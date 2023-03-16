import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 Not Found</h1>
            <p className={styles.description}>
                The page you are looking for does not exist.
            </p>
            <Link to="/" className={styles.link}>
                Go back to home
            </Link>
        </div>
    );
};

export default NotFound;
