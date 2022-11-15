import cta from '../../assets/cta-img.png';
import styles from './callToAction.module.scss';

const CallToAction = () => {
  return (
    <div className={styles.cta}>
      <div className={`${styles.content} container`}>
        <div className={styles.text}>
          <h3>Metabnb NFTs</h3>
          <p>
            Discover our NFT gift cards collection. Loyal customers get amazing
            gift cards which are traded as NFTs. These NFTs gives our customers
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>

        <div className={styles.img}>
          <img src={cta} alt="nfts" />{' '}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
