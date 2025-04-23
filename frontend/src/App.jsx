import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PostJob from "./pages/PostJob";
import JobList from "./pages/JobList";
import ViewProposals from "./pages/ViewProposals";
import EditProfile from "./pages/EditProfile";
import ViewProfile from "./pages/ViewProfile";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/post-job"
        element={
          <PrivateRoute>
            <PostJob />
          </PrivateRoute>
        }
      />
      <Route path="/jobs" element={<JobList />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/job/:jobId/proposals"
        element={
          <PrivateRoute>
            <ViewProposals />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        }
      />
      <Route path="/profile/:userId" element={<ViewProfile />} />
    </Routes>
  );
}

export default App;
