import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ variant, btnText, onClick }) => {
  return (
    <button className={clsx(css.button, css[variant])} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
