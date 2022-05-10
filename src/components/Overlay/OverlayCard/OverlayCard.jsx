import React from 'react';
import { grayBox } from '../../../assets/img/index.js';
import styles from './OverlayCard.module.scss';
export default function OverlayCard(props) {
  return (
    <div className={styles.overlay_card}>
      <div className={styles.overlay_img_wrap}>
        <img src={grayBox} alt='gray-box' />
      </div>
      <div className={styles.overlay_title}>
        <span>{props.title}</span>
      </div>
    </div>
  );
}
