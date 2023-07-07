import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFire,
  faBookmark,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const [menuSelection, setMenuSelection] = useState("Discover");

  const updateMenuSelection = (selection) => {
    setMenuSelection(selection);
  };

  const sideBarElements = [
    { title: "Discover", icon: faHouse },
    { title: "Trending", icon: faFire },
    { title: "Bookmarked", icon: faBookmark },
    { title: "Your Projects", icon: faFileCode },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-title">UniCode</div>
      <div className="sidebar-section-title">MENU</div>
      {sideBarElements.map((element) => (
        <SideBarElement
          key={element.title}
          title={element.title}
          icon={element.icon}
          selected={menuSelection === element.title}
          onClick={() => updateMenuSelection(element.title)}
        />
      ))}
      <div className="sidebar-divider"></div>
    </div>
  );
}

function SideBarElement({ title, icon, selected, onClick }) {
  return (
    <div className={`baritem ${selected ? "selected" : ""}`} onClick={onClick}>
      <div className="sidebaricon-container">
        <FontAwesomeIcon
          className={`sidebaricon baritem ${selected ? "selected" : ""}`}
          icon={icon}
        />
      </div>
      <div className="sidebaritem-title">{title}</div>
    </div>
  );
}

export default SideBar;
