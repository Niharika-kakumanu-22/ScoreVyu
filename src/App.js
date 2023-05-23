import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login"
import Home from "./components/Home";
import Graphs from "./components/Graphs"; // Update the import statement
import fire from "./fire"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      sessionStorage.setItem("uid", user.uid);
      user.getIdToken().then((tkn) => {
        sessionStorage.setItem("accessToken", tkn);
        setIsLoggedIn(true);
      });
    } else {
      setIsLoggedIn(false);
    }
  });

      return (
        <>
          <BrowserRouter>
            <Routes>
              {!isLoggedIn && !sessionStorage.getItem("accessToken") ? (
                <Route path='/' element={<Login />} />
              ) : (
                <>
                  <Route path='/' element={<Home />} />
                  <Route path='/graphs' element={<Graphs />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </>
      );
    }
  

export default App;