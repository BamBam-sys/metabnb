import rating from '../../assets/rating.svg';
import { ReactComponent as Like } from '../../assets/like.svg';
import styles from './card.module.scss';

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={item.img} alt="place" />
        <Like className={styles.like} />
      </div>
      <div className={styles.info}>
        <p>Desert King</p>
        <p>1MBT per night</p>
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
        <img src={rating} alt="rating" />
      </div>
    </div>
  );
};

export default Card;
