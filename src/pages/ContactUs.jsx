import styles from "./ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        Need to get in touch with us? Fill out the form below and we’ll get back to you soon.
      </p>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Your Name"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Your Email"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            rows="4"
            placeholder="Type your message"
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
    </div>
  );
}
