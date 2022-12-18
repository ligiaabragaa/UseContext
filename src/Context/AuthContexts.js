import { createContext, ReactNode, useState } from "react";


export const AuthContext = createContext({}  );

export function AuthProvider({ children } ) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser ] = useState("")

  return ( 
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}