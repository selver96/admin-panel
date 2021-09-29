import React from "react";
import "./SideBar.css";
import { AccountCircle, Forum, CameraRoll } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <AccountCircle className="sidebarIcon" />
          <h3 className="sidebarTitle">Account</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink className="sidebarListItemLink" to="/account/profile">
                My Profile
              </NavLink>
            </li>
          </ul>
          <Forum className="sidebarIcon" />
          <h3 className="sidebarTitle">Conversations</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink
                className="sidebarListItemLink"
                to="/conversation/allConversations"
              >
                All Conversations
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink
                className="sidebarListItemLink"
                to="/conversation/whatsapp"
              >
                WhatsApp
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink
                className="sidebarListItemLink"
                to="/conversation/telegram"
              >
                Telegram
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink
                className="sidebarListItemLink"
                to="/conversation/facebook"
              >
                Facebook
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink
                className="sidebarListItemLink"
                to="/conversation/jelibot"
              >
                JeliBot
              </NavLink>
            </li>
          </ul>
          <CameraRoll className="sidebarIcon" />
          <h3 className="sidebarTitle">Sessions</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink
                className="sidebarListItemLink"
                to="/sessions/allSessions"
              >
                All Sessions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
