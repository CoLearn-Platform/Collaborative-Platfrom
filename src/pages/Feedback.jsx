import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAddFeedback } from "../hooks/useAddFeedback";
import styles from "./Feedback.module.scss";
import Button from "../ui/Button";

export default function Feedback() {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector((state) => state.user);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);

  const { mutateFeedback, isLoading } = useAddFeedback();

  function onSubmit(data) {
    mutateFeedback(data, {
      onSuccess: reset,
    });
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Give Us Your Feedback</h1>
      <p className={styles.description}>
        We value your feedback. Help us improve by sharing your thoughts!
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <input
            {...register("userId", { required: true })}
            defaultValue={userId}
            hidden
          />
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: true })}
            className={styles.input}
            placeholder="Your Name"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            defaultValue={user?.email}
            className={styles.input}
            placeholder="Your Email"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: true })}
            className={styles.input}
            placeholder="Title"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="feedback" className={styles.label}>
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            {...register("description", { required: true })}
            className={styles.textarea}
            rows="4"
            placeholder="Share your feedback"
            required
          />
        </div>
        {isUserLoggedIn ? (
          <Button type="submit" className={styles.submitBtn}>
            Send Feedback
          </Button>
        ) : (
          <p>Please Login First!</p>
        )}
      </form>
    </div>
  );
}
