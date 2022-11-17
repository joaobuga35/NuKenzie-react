import { useState } from "react";
import { HomeIndex } from "./components/HomeIndex";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <HomeIndex />
    </div>
  );
}

export default App;
