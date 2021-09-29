import React from "react";
import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};
