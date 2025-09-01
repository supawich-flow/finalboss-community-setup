import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import axios from "axios";

type User = {
  userId: string;
  username: string,
  displayName: string,
  roles: string[];
  email: string,
  avatarUrl: string,
  title: string,
  nickname: string,
  isActive: boolean,
};

type AuthContextType = {
  token: string | null;
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (token: string, userData:any) => void;
  logout: () => void;
  loading: boolean
  refreshUser: () => Promise<void>;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  token: "",
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  loading: true,
  refreshUser: async() => {}
});

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const userDataString  = localStorage.getItem("userData");

    if (storedToken && userDataString ) {
      const userData: User = JSON.parse(userDataString);
      setCurrentUser({...userData});
      setToken(storedToken);
    }
    setLoading(false);
  },[]);

  useEffect(() => {
    console.log("currentUser:", currentUser)
  },[currentUser])

  const login = (token: string, userData:any) => {
    try {
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(userData))
      setCurrentUser(userData);
      setToken(token);
      navigate("/");
    } catch (err) {
      console.log("Login error:", err);
    }
  };

  const logout = () => {
    if (currentUser) {
      localStorage.removeItem('token')
      setCurrentUser(null);
      setToken(null);
      navigate('/login')
    }
  };

  const refreshUser = async() => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return;

      const res = await axios.get("http://localhost:5000/api/users/me/editprofile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const updatedUser = res.data
    localStorage.setItem("userData", JSON.stringify(updatedUser))
    setCurrentUser(updatedUser)

    } catch (err) {
      console.error("Error refreshing user:", err);
    }
  }

  return(
    <AuthContext.Provider value={{
        currentUser,
        token,
        isAuthenticated: !!currentUser,
        login,
        logout,
        loading,
        refreshUser,
    }}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}