import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const picture = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
function Header(image, username) {
  const [isOpenDropDown, setOpenDropDown] = useState(false);
  const toggleDropDown = () => {
    setOpenDropDown(!isOpenDropDown);
  };

  return (
    <div className="header">
      <div className="searchbar-container">
        <input
          className="searchbar"
          type="text"
          placeholder="Search Projects"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="profile-container">
        <img className="pfp" alt="profile" src={picture}></img>
        <div className="username-container" onClick={toggleDropDown}>
          <span className="username">connorjd</span>
          {isOpenDropDown && (
            <div className="dropdown-content">
              <ul>
                <li>Friends</li>
                <li>Your Projects</li>
                <li>Sign Out</li>
              </ul>
            </div>
          )}
        </div>
        <FontAwesomeIcon className="bell" icon={faBell}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Header;
