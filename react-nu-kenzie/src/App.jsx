import { useState } from "react";
import { HomeIndex } from "./components/HomeIndex";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listTransaction, setListTransaction] = useState([]);
  const [filterList, setFilterList] = useState([]);
  console.log(listTransaction);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Header
          logout={logout}
          listTransaction={listTransaction}
          setListTransaction={setListTransaction}
          filterList={filterList}
          setFilterList={setFilterList}
        />
      ) : (
        <HomeIndex login={login} />
      )}
    </div>
  );
}

export default App;
