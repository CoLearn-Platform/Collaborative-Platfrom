import styles from "./Button.module.scss";

function Button({
  styleType = "primary",
  children,
  onClick,
  defaultVal = null,
  disabled = false,
  type = "button",
}) {
  if (onClick)
    return (
      <button
        className={`${styles.button} ${styles[styleType]}`}
        onClick={onClick}
        defaultValue={defaultVal}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    );
  return (
    <button
      className={`${styles.button} ${styles[styleType]}`}
      defaultValue={defaultVal}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
