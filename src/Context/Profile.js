import { useContext, useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";

export function Profile() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <div>
      <p></p>
    </div>
  );
}