import React from "react";
import "../Styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="icon">
        <button></button>
      </div>
      <div className="pagenav-button">
        <button>
          <FontAwesomeIcon icon={faHouse} className="navicons" />
        </button>
      </div>
      <div className="pagenav-button">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="pagenav-button">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
