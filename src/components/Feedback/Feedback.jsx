import css from "./Feedback.module.css";

const Feedback = ({
  stats: { good, neutral, bad },
  feedbacks: { positiveFeedback, totalFeedback },
}) => {
  if (!totalFeedback) {
    return <p>No feedback given</p>;
  }

  return (
    <div className={css.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
