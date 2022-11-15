import logo from '../../assets/footer-brand-logo.png';
import { ReactComponent as Fb } from '../../assets/fb.svg';
import { ReactComponent as Insta } from '../../assets/insta.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.content}`}>
        <div className={styles.brand}>
          <div>
            <img src={logo} alt="logo" />{' '}
          </div>
          <div>
            <Fb />
            <Insta />
            <Twitter />
          </div>
        </div>
        <div className={styles.community}>
          <h4>Community</h4>
          <span>NFT</span>
          <span>Tokens</span>
          <span>Landlords</span>
          <span>Discord</span>
        </div>
        <div className={styles.places}>
          <h4>Places</h4>
          <span>Castle</span>
          <span>Farms</span>
          <span>Beach</span>
          <span>Learn more</span>
        </div>
        <div className={styles.about}>
          <h4>About us</h4>
          <span>Road map</span>
          <span>Creators</span>
          <span>Career</span>
          <span>Contact us</span>
        </div>
      </div>
      <div className={styles.copy}>© 2022 Metabnb</div>
    </div>
  );
};

export default Footer;
