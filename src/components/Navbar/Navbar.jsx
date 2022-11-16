import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/brand-logo.svg';
import { ReactComponent as Brand } from '../../assets/brand.svg';
import { Button } from '../../common';

import { IoMenu, IoClose } from 'react-icons/io5';

import styles from './navbar.module.scss';

const Navbar = ({ handleModal }) => {
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    !mobileNav
      ? (document.body.style.overflowY = 'scroll')
      : (document.body.style.overflowY = 'hidden');
  }, [mobileNav]);

  return (
    <div className={`${styles.navbar}`}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.brand}>
          <Logo />
          <Brand />
        </Link>
        <ul className={styles.links}>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/place-to-stay">
              Place to stay
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              NFTs
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Community
            </Link>
          </li>
        </ul>
        <div className={styles.btn} onClick={() => handleModal()}>
          <Button text="Connect Wallet" />
        </div>
        <div
          onClick={() => setMobileNav((prev) => !prev)}
          className={styles.hamburgerMenu}
        >
          {mobileNav ? <IoClose /> : <IoMenu />}
        </div>

        {/* mobile */}
        <div className={`${styles.mobile} ${mobileNav ? styles.open : ''}`}>
          <ul className={styles.links}>
            <li>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/place-to-stay">
                Place to stay
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                NFTs
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                Community
              </Link>
            </li>
          </ul>
          <div className={styles.btn} onClick={() => handleModal()}>
            <Button text="Connect Wallet" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
