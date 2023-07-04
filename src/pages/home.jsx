import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import ProjectDisplay from "../components/ProjectDisplay";

function Home() {
  return (
    <div>
      <SideBar></SideBar>
      <Header></Header>
      <ProjectDisplay></ProjectDisplay>
    </div>
  );
}

export default Home;
