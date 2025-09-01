import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      console.log(JSON.stringify(decodedToken, null, 2));
      console.log(currentTime);

      if (decodedToken.exp && decodedToken.exp > currentTime) {
        return <Outlet/>
      } else {
        localStorage.removeItem("token");
        return <Navigate to="/login" replace />;
      }
    } catch (err) {
      console.log("Invalid token:", err);
      return <Navigate to="/login" replace />;
    } 
  } else {
    return <Navigate to="/login" replace />;
  }
}
