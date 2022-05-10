import styles from "./Projects.module.scss";
import { GradientBtn, ProjectCard } from "components/index";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projects_wrap}>
        {/* HEAD*/}
        <span className={styles.projects_head}>search by categories</span>
        <div className={styles.projects_wrap_container}>
          {/* INPUT BOX */}
          <div className={styles.projects_inputBox}>
            <div className={styles.projects_inputBox_wrap}>
              {/* NAME */}
              <div className={styles.projects_inputBox_name}>
                <div className={styles.projects_inputBox_name_text}>Name</div>
                <input
                  placeholder="Enter your name"
                  className={styles.projects_inputBox_name_input}
                ></input>
              </div>
              {/* TYPE */}
              <div className={styles.projects_inputBox_type}>
                <div className={styles.projects_inputBox_type_text}>Type</div>
                <input
                  placeholder="Select type"
                  className={styles.projects_inputBox_type_input}
                ></input>
              </div>
              {/* CATEGORY */}
              <div className={styles.projects_inputBox_category}>
                <div className={styles.projects_inputBox_category_text}>
                  Category
                </div>
                <input
                  placeholder="Select type"
                  className={styles.projects_inputBox_category_input}
                ></input>
              </div>
              {/* BUTTON */}
              <div className={styles.projects_btn_wrap}>
                <GradientBtn text="Search" />
              </div>
            </div>
          </div>
          <div className={styles.projects_wrap_container_projects}>
            {[1, 2, 3, 4].map((item) => (
              <ProjectCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
