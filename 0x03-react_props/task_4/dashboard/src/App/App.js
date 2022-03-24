import React from "react";
import "../App/App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';

const App = ({ isLoggedIn }) => {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <hr />
        {isLoggedIn ? <CourseList /> : <Login />}
        <hr />
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};


export default App;
