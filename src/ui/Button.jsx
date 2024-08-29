function Button({
  styleType = "primary",
  children,
  onClick,
  defaultVal = null,
  disabled = false,
  type = "button",
}) {
  const styles = {
    primary:
      "bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300",
    join: "bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition duration-300",
    remove:
      "bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition duration-300",
    leave:
      "bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition duration-300",
    login:
      "bg-indigo-500 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-600 transition duration-300",
  };

  if (onClick)
    return (
      <button
        className={styles[styleType]}
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
      className={styles[styleType]}
      defaultValue={defaultVal}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
