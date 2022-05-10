import React from "react";
import styles from "./Overlay.module.scss";
import Grid from "./Grid/Grid";
export default function Overlay() {
  return (
    <Overlay>
      <div className={styles.overlay}>
        <div className={styles.overlay_wrap}>
          <div className={styles.overlay_head}>
            <span>I choose my category</span>
          </div>
          <div className={styles.overlay_body}>
            <div className={styles.body_bar}></div>
            <div className={styles.body_grid}>
              <Grid />
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
