import { ReactComponent as Mbtoken } from '../../assets/mbtoken.svg';
import { ReactComponent as Metamask } from '../../assets/metamask.svg';
import { ReactComponent as Opensea } from '../../assets/opensea.svg';
import styles from './logos.module.scss';

const Logos = () => {
  return (
    <div className={styles.logos}>
      <Mbtoken />
      <Metamask />
      <Opensea />
    </div>
  );
};

export default Logos;
