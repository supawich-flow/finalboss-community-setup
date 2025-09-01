import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import EditProfile from "./pages/profile/EditProfile";
import Dashboard from "./pages/dashboard/Dashboard";
import OnlySideBar from "./layouts/only-sidebar layout/OnlySideBar";
import ProtectedRoutes from "./components/protected routes/ProtectedRoutes";
import Profile from "./pages/profile/Profile";
import "./App.css";

function App() {
  return (
    <>
      {/* React-hot-toast */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Auth */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Pages */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<OnlySideBar />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/editprofile/" element={<EditProfile />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
