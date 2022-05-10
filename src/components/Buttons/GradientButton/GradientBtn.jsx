import styles from './GradientBtn.module.scss';
const GradientBtn = (props) => {
  return (
    <button type='button' className={styles.gradient_btn}>
      <span className='gradient_btn-text'>{props.text}</span>
    </button>
  );
};

export default GradientBtn;
