import React from 'react';
import { content_actions, worker } from 'assets/img';
import styles from './ProjectSettings.module.scss';

const GeneralContent = () => {
  return (
    <div className={styles.right_side}>
      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Title'}</div>
        <div className={styles.field_input}>
          <input type='text' placeholder='My super project name that i like' />
        </div>
      </div>

      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Cover Picture'}</div>
        <div className={styles.field_input}>
          <div className={styles.field_input_container}>
            <button className={styles.choose_btn}>Browse</button>
            <div className={styles.image_box}>
              <img src={worker} alt='cover' />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Category'}</div>
        <div className={styles.field_input}>
          <div className={styles.field_input_container}>
            <button className={styles.choose_btn}>Select</button>
          </div>
        </div>
      </div>

      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Description'}</div>
        <div className={styles.field_input}>
          <div className={styles.description_container}>
            <div className={styles.description_header}>
              <div className={styles.description_actions_container}>
                <img src={content_actions} alt='plus' />
              </div>
            </div>

            <div className={styles.description_body}>
              <div className={styles.description_cover_image}>
                <img src={worker} alt='cover' />
              </div>
              <div className={styles.description_text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&pos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalContent = () => {
  return (
    <div className={styles.right_side}>
      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Event date'}</div>
        <div className={styles.field_input}>
          <input type='date' />
        </div>
      </div>
      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Entry deadline'}</div>
        <div className={styles.field_input}>
          <input type='date' />
        </div>
      </div>
      <div className={styles.field_container}>
        <div className={styles.field_title}>{'Amount to reach'}</div>
        <div className={`${styles.field_input} ${styles.number_input}`}>
          <span className={styles.currency}>$</span>
          <input type='number' />
        </div>
      </div>
    </div>
  );
};
export default function ProjectSettings() {
  const [activeAction, setActiveAction] = React.useState('General');

  return (
    <div className={styles.settings_wrapper}>
      <div className={styles.left_side}>
        <div className={styles.action_btn_container}>
          <button
            className={`${styles.action_btn} ${
              activeAction === 'General' && styles.active
            }`}
            onClick={() => setActiveAction('General')}
          >
            General
          </button>
          <button
            className={`${styles.action_btn} ${
              activeAction === 'Goal' && styles.active
            }`}
            onClick={() => setActiveAction('Goal')}
          >
            Goal
          </button>
        </div>
      </div>
      {activeAction === 'General' && <GeneralContent />}
      {activeAction === 'Goal' && <GoalContent />}
    </div>
  );
}
