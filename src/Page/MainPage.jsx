import React from "react";
import Sidebar from "../Components/Sidebar";
import MainContainer from "../Components/MainContainer";
import "../Styles/mainpage.css";
const MainPage = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default MainPage;
