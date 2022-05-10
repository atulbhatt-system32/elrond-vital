import React from 'react';
import OverlayCard from '../OverlayCard/OverlayCard';
import styles from './Grid.module.scss';

export default function Grid(props) {
  const details = props.items;
  const gridData = details.map((e) => {
    return <OverlayCard key={e.key} img={e.img} title={e.title} />;
  });
  return (
    <div className={styles.grid}>
      <div className={styles.grid_head}>
        <span>{props.category}</span>
      </div>
      <div className={styles.grid_body}>{gridData}</div>
    </div>
  );
}
