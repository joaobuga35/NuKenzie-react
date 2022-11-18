import { useState } from "react";
import { HomeIndex } from "./components/HomeIndex";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoggedIn ? <Header logout={logout} /> : <HomeIndex login={login} />}
    </div>
  );
}

export default App;
