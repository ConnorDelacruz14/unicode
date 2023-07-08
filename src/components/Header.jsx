import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const picture = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
function Header() {
  const [isOpenDropDown, setOpenDropDown] = useState(false);
  const toggleDropDown = () => {
    setOpenDropDown(!isOpenDropDown);
  };

  const [isSignedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("Sign in");

  const authenticate_user = () => {
    setSignedIn(true);
    //TODO: Handle Login and Password here
    setUsername("connorjd");
  };

  const logout = () => {
    setSignedIn(false);
    setUsername("Sign in");
  };

  return (
    <div className="header">
      <div className="profile-container">
        <img className="pfp" alt="profile" src={picture}></img>
        <div
          className="username-container"
          onClick={isSignedIn ? toggleDropDown : authenticate_user}
        >
          <span className="username">{username}</span>
          {isOpenDropDown && (
            <div className="dropdown-content">
              <ul>
                <li>Friends</li>
                <li>Your Projects</li>
                {isSignedIn ? <li onClick={logout}>Sign Out</li> : null}
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
