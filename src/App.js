import { useContext, useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(AuthContext);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h1>Você está logado</h1>
          <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>{user}Você não está logado</h1>
          <input type="text" onChange={(e)=> {setUser(e.target.value)}}/>
          <button onClick={() => {setIsAuthenticated(true), setUser(user)}}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;