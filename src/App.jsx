import { Description, Options, Feedback } from "./components/index.js";
import { useState, useEffect } from "react";

function App() {
  const initialStats = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [stats, setStats] = useState(() => {
    return JSON.parse(localStorage.getItem("stats")) || initialStats;
  });
  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const totalFeedback = stats.good + stats.neutral + stats.bad;
  const positiveFeedback = Math.round((stats.good / totalFeedback) * 100);
  const feedbacks = {
    totalFeedback,
    positiveFeedback,
  };

  const updateFeedback = (feedbackType) => {
    feedbackType === "reset"
      ? setStats(initialStats)
      : setStats((prevStats) => ({
          ...prevStats,
          [feedbackType]: prevStats[feedbackType] + 1,
        }));
    console.log(stats);
  };

  return (
    <>
      <Description />
      <Options
        stats={stats}
        updateFeedback={updateFeedback}
        totalFeedback={feedbacks.totalFeedback}
      />
      <Feedback stats={stats} feedbacks={feedbacks} />
    </>
  );
}

export default App;
