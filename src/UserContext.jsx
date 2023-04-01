import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get("/profile").then((response) => {
      setId(response.data.userId);
      setEmail(response.data.email);
    });
  }, []);

  return (
    <UserContext.Provider value={{ email, setEmail, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
