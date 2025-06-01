import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { ExpandMoreOutlined } from "@mui/icons-material"

function Sidebar() {
  const defaultUser = {
    photoURL: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    displayName: "Guest User"
  };

  return (
    <div className="sidebar">
        <SidebarRow src={defaultUser.photoURL} title={defaultUser.displayName} />
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  )
}

export default Sidebar;