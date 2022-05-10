import React from "react";
import styles from "./Grid.module.scss";
import OverlayCard from "../OverlayCard/OverlayCard";

export default function Grid() {
  return (
    <div className={styles.grid}>
      <div className={styles.grid_wrap}>
        <div className={styles.grid_head}>
          <span>A common gift</span>
        </div>
        <div className={styles.grid_body}>
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
          <OverlayCard />
        </div>
      </div>
    </div>
  );
}
