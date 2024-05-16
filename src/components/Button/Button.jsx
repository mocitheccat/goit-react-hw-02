import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ variant, btnText, onClick, totalFeedback }) => {
  return (
    <button
      className={clsx(
        css.button,
        css[variant],
        (variant === "reset") & (totalFeedback === 0) && css.hidden,
      )}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
