import React from "react";
import styles from "./OverlayCard.module.scss";
import { grayBox } from "assets/img";
export default function OverlayCard() {
  return (
    <div className={styles.overlay_card}>
      <div className={styles.overlay_img_wrap}>
        <img src={grayBox} alt="gray-box" />
      </div>
      <div className={styles.overlay_title}>
        <span>Wedding</span>
      </div>
    </div>
  );
}
