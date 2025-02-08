import { logInfo, logError } from "../utils/logger";

/**
 * Retrieves quiz results from localStorage.
 * @returns {Array} An array of quiz result objects.
 */
export const getQuizResults = () => {
  try {
    const results = JSON.parse(localStorage.getItem("quizResults") || "[]");
    logInfo("Retrieved quiz results.");
    return results;
  } catch (error) {
    logError("Error retrieving quiz results:", error);
    return [];
  }
};

/**
 * Saves a new quiz result to localStorage.
 * @param {object} result - The quiz result object.
 */
export const saveQuizResult = (result) => {
  try {
    const existingResults = getQuizResults();
    const newResults = [...existingResults, result];
    localStorage.setItem("quizResults", JSON.stringify(newResults));
    logInfo("Saved new quiz result:", result);
  } catch (error) {
    logError("Error saving quiz result:", error);
  }
};
