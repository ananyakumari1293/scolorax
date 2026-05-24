import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import DegreePage from "./pages/DegreePage";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/common/ProtectedRoute";
import SavedScholarships from "./pages/SavedScholarships";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* AUTH */}
        <Route
          path="/auth"
          element={<Auth />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        {/* DEGREE PAGE */}
        <Route
          path="/degree/:degreeName"
          element={
            <ProtectedRoute>

              <DegreePage />

            </ProtectedRoute>
          }
        />

        {/* PROFILE PAGE */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>

              <Profile />

            </ProtectedRoute>
          }
        />
        {/* Saved scholarships*/}
        <Route
  path="/saved"
  element={
    <ProtectedRoute>

      <SavedScholarships />

    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;