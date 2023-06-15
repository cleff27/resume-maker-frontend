import React, { useState, useEffect } from "react";
import "./App.css";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignIn";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import CreatePage from "./Pages/Create/Create";
import { Route, Routes } from "react-router-dom";
import MyResumes from "./Pages/myResumes/MyResumes";
import PDFdownload from "./components/pdfDownload/PDFdownload";
import AboutPage from "./Pages/About/About";
export const URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    if (loggedInUser) {
      const foundUser = loggedInUser;
      console.log(foundUser);
      setUser(foundUser);
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        user={user}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route
          path="/login"
          element={<LogIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
        />
        <Route
          path="/create"
          element={
            isLoggedIn ? (
              <CreatePage user={user} />
            ) : (
              <LogIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
            )
          }
        />
        <Route
          path="/myResumes"
          element={
            isLoggedIn ? (
              <MyResumes user={user} />
            ) : (
              <LogIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
            )
          }
        />
        <Route
          path="/view/:id"
          element={
            isLoggedIn ? (
              <PDFdownload />
            ) : (
              <LogIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
            )
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
