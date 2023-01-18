import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.Header}>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login / Criar </Link>
    </nav>
  )
}

export default Header;
