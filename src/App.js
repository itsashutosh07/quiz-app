import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import { logInfo } from "./utils/logger";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Quiz = React.lazy(() => import("./pages/Quiz"));
const Recap = React.lazy(() => import("./pages/Recap"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

/**
 * App component that sets up routing with error boundaries and lazy loading.
 */
function App() {
  useEffect(() => {
    logInfo("App component mounted.");
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route path="/recap" element={<Recap />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
