import styles from './button.module.scss';
import React from 'react';

export const Button = (props) => {
    const { label, onClick } = props;

    return (
        <button onClick={onClick} className={styles.button}>
            {label}
        </button>
    );
};
