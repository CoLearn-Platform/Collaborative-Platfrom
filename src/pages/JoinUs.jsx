import styles from "./JoinUs.module.scss";

export default function JoinUs() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Join Our Team</h1>
        <p className={styles.description}>
          "The best way to predict the future is to create it." <br /> Let’s build something amazing together!
        </p>
        <form className={styles.form}>
          {/* Name Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Skill Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="skill" className={styles.label}>
              Skill
            </label>
            <input
              type="text"
              id="skill"
              name="skill"
              className={styles.input}
              placeholder="Your skills..."
              required
            />
          </div>

          {/* Message Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows="4"
              placeholder="Tell us why you want to join us"
              required
            />
          </div>

          {/* Submit Button */}
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
