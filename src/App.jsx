import { Description, Options, Feedback } from "./components/index.js";
import { useState } from "react";

function App() {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });
  const feedbacks = {
    totalFeedback: good + neutral + bad,
    positiveFeedback: Math.round((good / totalFeedback) * 100),
  };

  const updateFeedback = (feedbackType) => {
    setStats((prevStats) => ({
      ...prevStats,
      [feedbackType]: prevStats[feedbackType] + 1,
    }));
    console.log(stats);
  };

  return (
    <>
      <Description />
      <Options stats={stats} updateFeedback={updateFeedback} />
      <Feedback stats={stats} />
    </>
  );
}

export default App;
