import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFire,
  faBookmark,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">UniCode</div>
      <div className="sidebar-section-title">MENU</div>
      <SideBarElement title="Discover" icon={faHouse} />
      <SideBarElement title="Trending" icon={faFire} />
      <SideBarElement title="Bookmarked" icon={faBookmark} />
      <SideBarElement title="Your Projects" icon={faFileCode} />
      <div className="sidebar-divider"></div>
    </div>
  );
}

function SideBarElement({ title, icon }) {
  return (
    <div className="baritem">
      <div className="sidebaricon-container">
        <FontAwesomeIcon className="sidebaricon" icon={icon} />
      </div>
      <div className="sidebaritem-title">{title}</div>
    </div>
  );
}

export default SideBar;
