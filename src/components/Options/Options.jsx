import { Button } from "../index.js";
import css from "./Options.module.css";

const Options = ({ stats, updateFeedback }) => {
  const options = ["good", "neutral", "bad", "reset"];

  return (
    <div className={css.options}>
      {options.map((option, index) => {
        return (
          <Button
            key={index}
            variant={option}
            btnText={option.toUpperCase()}
            onClick={() => updateFeedback(option)}
          />
        );
      })}
    </div>
  );
};

export default Options;
