import React from 'react';
import GradientBtn from 'components/Buttons/GradientButton/GradientBtn';
import styles from './Overlay.module.scss';

export default function Overlay(props) {
  const { heading = 'Settings' } = props;
  return (
    <div className={styles.overlay_wrap}>
      <div className={styles.overlay_head}>
        <span>{heading}</span>
      </div>
      <div className={styles.overlay_body}>{props.children}</div>
      <div className={styles.btn_wrap} onClick={() => console.log('hi')}>
        <GradientBtn text='Validate' />
      </div>
    </div>
  );
}
