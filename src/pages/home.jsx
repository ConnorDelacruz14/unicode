import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import ProjectDisplay from "../components/ProjectDisplay";
import SearchBar from "../components/SearchBar";

function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const url = new URL("http://10.0.0.17:8080/projects/search");
    url.searchParams.append("term", query);

    fetch(url, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSearchResults(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <SideBar></SideBar>
      <div className="header">
        <SearchBar
          onSearch={(query) => {
            handleSearch(query);
          }}
        />
        <Header></Header>
      </div>
      <ProjectDisplay projects={searchResults}></ProjectDisplay>
    </div>
  );
}

export default Home;
