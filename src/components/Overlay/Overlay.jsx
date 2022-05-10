import React from 'react';
import Grid from './Grid/Grid';
import styles from './Overlay.module.scss';
import GridData from './GridData';
import GradientBtn from 'components/Buttons/GradientButton/GradientBtn';

export default function Overlay() {
  const data = GridData.map((i) => {
    return <Grid key={i.key} category={i.category} items={i.items} />;
  });
  return (
    <div className={styles.overlay}>
      <div className={styles.overlay_wrap}>
        <div className={styles.overlay_head}>
          <span>I choose my category</span>
        </div>
        <div className={styles.overlay_body}>
          <div className={styles.body_bar}></div>
          <div className={styles.body_grid}>{data}</div>
        </div>
        <GradientBtn text='Next' />
      </div>
    </div>
  );
}
