import "./button.styles.scss";

const TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};
export const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${TYPES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};
