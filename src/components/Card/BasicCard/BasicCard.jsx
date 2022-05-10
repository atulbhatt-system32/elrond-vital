import styles from './BasicCard.module.scss';

const BasicCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_body}>{props.children}</div>
    </div>
  );
};

export default BasicCard;
