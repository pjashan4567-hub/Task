import React from "react";
import { Parallax } from "react-parallax";
import styles from "./StepsSection.module.css";
import first from "/01.png";
import second from "/02.png";
import third from "/03.png";
import firsteffect from "/firsteffect.jpg";

const StepsSection = () => {
  return (
    <section className={styles.stepsSection}>
      <Parallax bgImage={firsteffect} strength={300}>
        <div className={styles.stepsSectionContent}>
          <h2 className={styles.stepsTitle}>
            Three steps. A million possibilities.
          </h2>
        </div>
      </Parallax>
      
      <div className={styles.cardcontainer}>
        {/* Step 01 - Build */}
        <div className={styles.stepCard}>
          <div className={styles.stepCardContent}>
            <div className={styles.stepNumber}>
              <div className={styles.stepNumberText}>01</div>
              <div className={styles.stepTitle}>Build</div>
            </div>
            <div className={styles.stepVisual}>
              <img src={first} className={styles.cardimage} alt="Build Step" />
              <div className={styles.stepDescription}>
                <h3 className={styles.stepDescriptionTitle}>
                  Identify Your Cybersecurity Skills
                </h3>
                <p>
                  Build a personalized skill matrix that helps in just 10
                  minutes. Designed to build graduate and experience
                  professionals alike. Start here.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 02 - Validate */}
        <div className={`${styles.stepCard}`}>
          <div className={styles.stepCardContent}>
            <div className={styles.stepVisual}>
              <img src={second} className={styles.cardimage} alt="Validate Step" />
              <div className={styles.stepDescription}>
                <h3 className={styles.stepDescriptionTitle}>
                  Validate to Conquer
                </h3>
                <p>
                  Verify the currency and credibility of your cybersecurity
                  skills and knowledge via bite-size quizzes and
                  scenario-based mini challenges to verify your knowledge and
                  questions are based.
                </p>
              </div>
            </div>

            <div className={styles.stepNumber}>
              <div className={styles.stepNumberText}>02</div>
              <div className={styles.stepTitle}>Validate</div>
            </div>
          </div>
        </div>

        {/* Step 03 - Grow */}
        <div className={styles.stepCard}>
          <div className={styles.stepCardContent}>
            <div className={styles.stepNumber}>
              <div className={styles.stepNumberText}>03</div>
              <div className={styles.stepTitle}>Grow</div>
            </div>

            <div className={styles.stepVisual}>
              <img src={third} className={styles.cardimage} alt="Grow Step" />
              <div className={styles.stepDescription}>
                <h3 className={styles.stepDescriptionTitle}>
                  Unleash your Potential
                </h3>
                <p>
                  Get dynamic learning recommendations and one aligned
                  learning paths to address your skill gaps and help you
                  advance your skill or career seamlessly and quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;