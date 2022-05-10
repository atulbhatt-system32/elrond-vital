import styles from "./ProjectCard.module.scss";
import { cake, heart, person, money } from "../../../assets/img";

export default function ProjectCard() {
  return (
    // ADVANCE CAROUSEL:
    <div className={styles.projectCard}>
      {/* CAROUSEL WRAP */}
      <div className={styles.projectCard_wrap}>
        {/* CAROUSEL IMAGE */}
        <img className={styles.projectCard_img} src={cake} alt="cake" />
        {/* CAROUSEL CONTENT WRAP */}
        <div className={styles.projectCard_body_wrap}>
          <div className={styles.projectCard_text_additional}>
            {/* CAROUSEL TEXT WRAP */}
            <div className={styles.projectCard_textWrap}>
              <span className={styles.projectCard_title}>
                Lorem Ipsum is dummy
              </span>
              <p className={styles.projectCard_info}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            {/* ADDITIONAL */}
            <div className={styles.projectCard_additional}>
              {/* HEART */}
              <div className={styles.projectCard_additional_heart}>
                <img src={heart} alt="heart" />
                <span>30</span>
              </div>
              {/* PERSON */}
              <div className={styles.projectCard_additional_person}>
                <img src={person} alt="person" />
                <span>30</span>
              </div>
              {/* MONEY */}
              <div className={styles.projectCard_additional_money}>
                <img src={money} alt="money" />
                <span>$1,00,000</span>
              </div>
            </div>
          </div>
          {/* CAROUSEL BAR */}
          <div className={styles.projectCard_barWrap}>
            <div className={styles.projectCard_barContainer}>
              <div className={styles.projectCard_bar}>
                <span className={styles.projectCard_current}>
                  $50,000 raised
                </span>
                <span className={styles.projectCard_total}>Goals: $50,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
