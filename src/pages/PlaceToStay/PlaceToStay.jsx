import React from 'react';
import setting from '../../assets/setting.png';
import data from '../../data.json';
import { Card } from '../../common';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useState } from 'react';
import styles from './placeToStay.module.scss';

const PlaceToStay = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropdown = () => setDropDown((prev) => !prev);

  return (
    <div className={`${styles.placeToStay} container`}>
      <div className={styles.header}>
        {dropDown ? (
          <IoClose className={styles.icon} onClick={() => handleDropdown()} />
        ) : (
          <IoMenu className={styles.icon} onClick={() => handleDropdown()} />
        )}

        <div className={styles.links}>
          <span>Restaurant</span>
          <span>Cottage</span>
          <span>Fantasy city</span>
          <span>Beach</span>
          <span>Carbins</span>
          <span>Off-grid</span>
          <span>Farm</span>
        </div>

        {/* mobile */}
        {dropDown && (
          <div className={styles.mobileLinks}>
            <span>Restaurant</span>
            <span>Cottage</span>
            <span>Fantasy city</span>
            <span>Beach</span>
            <span>Carbins</span>
            <span>Off-grid</span>
            <span>Farm</span>
          </div>
        )}
        <div className={styles.setting}>
          location <img src={setting} alt="setting" />
        </div>
      </div>

      <div className={styles.cards}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PlaceToStay;
