import React from "react";
import "../App/App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <hr />
        <Login />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default App;
