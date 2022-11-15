import { Card } from '../../common';
import styles from './homes.module.scss';
import data from '../../data.json';

const Homes = () => {
  const items = [];

  for (let i = 0; i < 8; i++) {
    items.push(data[i]);
  }

  return (
    <div className={`${styles.homes} container`}>
      <h2>Inspiration for your next adventure</h2>
      <div className={styles.cards}>
        {items && items.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Homes;
