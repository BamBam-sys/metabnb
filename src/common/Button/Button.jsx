import React from 'react';
import styles from './button.module.scss';

const Button = ({ text }) => {
  return <div className={styles.btn}>{text}</div>;
};

export default Button;
