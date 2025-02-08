export const getQuizResults = () => {
  return JSON.parse(localStorage.getItem("quizResults") || "[]");
};

export const saveQuizResult = (result) => {
  const existingResults = getQuizResults();
  localStorage.setItem(
    "quizResults",
    JSON.stringify([...existingResults, result])
  );
};
