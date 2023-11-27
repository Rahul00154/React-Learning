const Button = ({ imageUrl, buttonName, clickHandler, children }) => {
  return (
    <button onClick={clickHandler}>
      {children}
      <img src={imageUrl} alt={buttonName} />
    </button>
  );
};

export default Button;
