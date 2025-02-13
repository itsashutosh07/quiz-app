import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  const [quizResults, setQuizResults] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    setQuizResults(storedResults);
  }, []);

  const filteredResults = quizResults.filter(
    (result) =>
      (filter === "All" || result.subject === filter) &&
      result.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search by quiz title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded-lg border dark:border-gray-700"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded-lg border dark:border-gray-700"
        >
          <option value="All">All Subjects</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredResults}>
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ul className="mt-6 space-y-4">
        {filteredResults.map((result, index) => (
          <li
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <p>
              <strong>{result.title}</strong> - {result.subject}
            </p>
            <p>
              Score: {result.correctAnswers}/{result.totalQuestions}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
