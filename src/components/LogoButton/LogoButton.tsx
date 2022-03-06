import React from 'react';
import Link from 'next/link';
import styles from './LogoButton.module.css';

const LogoButton = () => (
    <Link href="/" passHref>
      <a className={styles.logo}>
        @FelipeHFO
      </a>
    </Link>
);

export default LogoButton;