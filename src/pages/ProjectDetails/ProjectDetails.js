import React from "react";
import styles from "./ProjectDetails.module.scss";
import {
  worker,
  location,
  heart,
  person,
  money,
  share,
  donation,
} from "../../assets/img/index";
import { GradientBtn } from "../../components/index";
export default function ProjectDetails() {
  return (
    <div className={styles.projectDetails}>
      <section className={styles.img_wrap}>
        <img src={worker} alt="worker" />
      </section>
      <div className={styles.project_details_card}>
        <section className={styles.participate}>
          <div className={styles.content}>
            <span className={styles.content_head}>What is Lorem Ipsum?</span>
            <div className={styles.content_details}>
              <div className={styles.category}>
                <span className={styles.left}>Category:</span>
                <span className={styles.right}>Personal projects</span>
              </div>
              <div className={styles.categories_wrapper}>
                <div className={styles.category_box}>
                  <span className={styles.left}>Likes</span>
                  <div className={styles.right}>
                    <img src={heart} alt="heart" />
                    <span>30</span>
                  </div>
                </div>
                <div className={styles.category_box}>
                  <span className={styles.left}>Participants</span>
                  <div className={styles.right}>
                    <img src={person} alt="person" />
                    <span>30</span>
                  </div>
                </div>
                <div className={styles.category_box}>
                  <span className={styles.left}>Amount raised</span>
                  <div className={styles.right}>
                    <img src={money} alt="money" />
                    <span>$70,000</span>
                  </div>
                </div>
              </div>
              {/* ************************************* */}
            </div>
            <div className={styles.btn}>
              <GradientBtn text="Participate" />
            </div>
          </div>
        </section>

        <section className={styles.target_amount}>
          <div className={styles.target_desktop}>
            <span>Target amount</span>
            <div className={styles.money}>
              <img src={money} alt="money" />
              <span>$70,000 / $1,00,000</span>
            </div>
          </div>
          <div className={styles.copy_wrapper}>
            <input className={styles.inputMobile}></input>
            <input
              placeholder="https://vital-dapp.com/mymoneypot"
              className={styles.inputDesktop}
            ></input>

            <div className={styles.bottom}>
              <button className={styles.copy_btn}>Copy</button>
              <div className={styles.share}>
                <span>Share</span>
                <img src={share} alt="share" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.details}>
          <span className={styles.main_head}>What is Lorem Ipsum?</span>
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen{" "}
          </p>
          <img src={worker} alt="worker" />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
          </p>
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more
          </p>
          <span className={styles.secondary_head}>What is Lorem Ipsum?</span>
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <img src={donation} alt="donation" />
        </section>

        <section className={styles.organizer_wrapper}>
          <div className={styles.organizer_name}>
            <span className={styles.organizer_name_text}>Organizer Name</span>
          </div>
          <div className={styles.organizer_profile}>
            <div className={styles.organizer_profile_img}>
              <img
                src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
                alt="john"
              />
            </div>
            <div className={styles.organizer_profile_name}>
              <span className={styles.organizer_profile_name_text}>
                John Doe
              </span>
            </div>
          </div>
          <div className={styles.organizer_address}>
            <div className={styles.organizer_address_icon}>
              <img src={location} alt="location" />
            </div>
            <div className={styles.organizer_address_wrap}>
              <span className={styles.organizer_address_text}>
                9473 Rocky River Rd. Raleigh, NC 27603
              </span>
            </div>
          </div>
        </section>
        <section className={styles.organizer_wrapper_mobile}>
          <span className={styles.label}>Organizer</span>
          <span className={styles.value}>
            erd158qsdfqqdfqc4gutf9tqmqqlxmepm5mepm5t2dz99
          </span>
        </section>
      </div>
    </div>
  );
}
