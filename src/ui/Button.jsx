function Button({ children, onClick }) {
  const styles = {
    primary:
      "bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300",
  };

  if (onClick)
    return (
      <button className={styles.primary} onClick={onClick}>
        {children}
      </button>
    );
  return <button className={styles.primary}>{children}</button>;
}

export default Button;
