// src/data/quizData.js

// Dummy quiz questions for each subject
export const quizData = {
  dsa: [
    {
      question: "What is the time complexity of binary search?",
      options: [
        { answer: "O(log n)", isCorrect: true },
        { answer: "O(n)", isCorrect: false },
        { answer: "O(n log n)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "Which data structure uses LIFO order?",
      options: [
        { answer: "Stack", isCorrect: true },
        { answer: "Queue", isCorrect: false },
        { answer: "Linked List", isCorrect: false },
        { answer: "Tree", isCorrect: false },
      ],
    },
    // Add more questions as needed
  ],
  oop: [
    {
      question: "What principle does encapsulation represent in OOP?",
      options: [
        { answer: "Data hiding", isCorrect: true },
        { answer: "Inheritance", isCorrect: false },
        { answer: "Polymorphism", isCorrect: false },
        { answer: "Abstraction", isCorrect: false },
      ],
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: [
        { answer: "extends", isCorrect: true },
        { answer: "implements", isCorrect: false },
        { answer: "inherits", isCorrect: false },
        { answer: "super", isCorrect: false },
      ],
    },
    // Add more questions as needed
  ],
  dbms: [
    {
      question: "Which SQL statement is used to extract data from a database?",
      options: [
        { answer: "SELECT", isCorrect: true },
        { answer: "EXTRACT", isCorrect: false },
        { answer: "GET", isCorrect: false },
        { answer: "OPEN", isCorrect: false },
      ],
    },
    {
      question: "What does ACID stand for in database systems?",
      options: [
        {
          answer: "Atomicity, Consistency, Isolation, Durability",
          isCorrect: true,
        },
        {
          answer: "Accuracy, Consistency, Isolation, Durability",
          isCorrect: false,
        },
        {
          answer: "Atomicity, Concurrency, Isolation, Durability",
          isCorrect: false,
        },
        {
          answer: "Atomicity, Consistency, Integration, Durability",
          isCorrect: false,
        },
      ],
    },
    // Add more questions as needed
  ],
  os: [
    {
      question:
        "Which scheduling algorithm is known as round-robin scheduling?",
      options: [
        { answer: "Time-sharing scheduling", isCorrect: true },
        { answer: "First-Come, First-Served", isCorrect: false },
        { answer: "Shortest Job First", isCorrect: false },
        { answer: "Priority scheduling", isCorrect: false },
      ],
    },
    {
      question: "What is a deadlock in operating systems?",
      options: [
        {
          answer: "A situation where processes are waiting indefinitely",
          isCorrect: true,
        },
        { answer: "A process that has completed execution", isCorrect: false },
        { answer: "A process waiting for I/O", isCorrect: false },
        { answer: "A process that is terminated", isCorrect: false },
      ],
    },
    // Add more questions as needed
  ],
  networks: [
    {
      question: "Which protocol is used for secure web browsing?",
      options: [
        { answer: "HTTPS", isCorrect: true },
        { answer: "HTTP", isCorrect: false },
        { answer: "FTP", isCorrect: false },
        { answer: "SMTP", isCorrect: false },
      ],
    },
    {
      question: "What does LAN stand for?",
      options: [
        { answer: "Local Area Network", isCorrect: true },
        { answer: "Large Area Network", isCorrect: false },
        { answer: "Light Area Network", isCorrect: false },
        { answer: "Long Area Network", isCorrect: false },
      ],
    },
    // Add more questions as needed
  ],
};

// Export subjects array to be used in the UI (order and colors should match the quizData keys)
export const subjects = [
  { name: "Data Structures & Algorithms", key: "dsa", color: "#FF6B6B" },
  { name: "Object-Oriented Programming", key: "oop", color: "#6BFF95" },
  { name: "Database Management Systems", key: "dbms", color: "#6B95FF" },
  { name: "Operating Systems", key: "os", color: "#FFA500" },
  { name: "Computer Networks", key: "networks", color: "#C678DD" },
];
