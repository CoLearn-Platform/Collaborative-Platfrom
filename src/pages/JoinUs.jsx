import { useForm } from "react-hook-form";
import styles from "./JoinUs.module.scss";
import { useAddEnquiry } from "../hooks/useAddEnquiry";
import { useSelector } from "react-redux";
import Button from "../ui/Button";

export default function JoinUs() {
  const { register, handleSubmit, reset } = useForm();
  const { addEnquiry } = useAddEnquiry();
  const { user } = useSelector((state) => state.user);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);

  function onSubmit(data) {
    // console.log(data);
    addEnquiry(data, {
      onSuccess: reset,
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Join Our Team</h1>
        <p className={styles.description}>
          The best way to predict the future is to create it. <br /> Let&apos;s
          build something amazing together!
        </p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: true })}
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
              defaultValue={user?.email}
              {...register("email", { required: true })}
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
              {...register("message", { required: true })}
              rows="4"
              placeholder="Tell us why you want to join us"
              required
            />
          </div>

          {/* Submit Button */}
          <div className={styles.buttonWrapper}>
            {isUserLoggedIn ? (
              <Button type="submit" className={styles.submitButton}>
                Send Message
              </Button>
            ) : (
              <strong>Please Login First!</strong>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
