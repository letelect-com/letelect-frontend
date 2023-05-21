import React from "react";
import { SidebarData } from "../data/SidebarData";

const Sidebar = () => {
  return (
    <div>
      <ul>
        {SidebarData.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => (window.location.pathname = item.link)}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
