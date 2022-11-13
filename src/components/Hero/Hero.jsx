import React from 'react';
import styles from './hero.module.scss';
import { ReactComponent as Img } from '../../assets/hero-img.svg';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the{' '}
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn on your imagination to reality at your
          comfort zone.
        </p>

        <div className={styles.search}>
          <input type="text" placeholder="Search for location" />
          <button>Search</button>
        </div>
      </div>
      <div className={styles.img}>
        <Img />
      </div>
    </div>
  );
};

export default Hero;
