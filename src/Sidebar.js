import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons"

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow src='https://www.bing.com/images/search?view=detailV2&ccid=f0g9p0FK&id=10896A4C81D3EF134D5DA52C968B848103A89312&thid=OIP.f0g9p0FKCO9mT1D0_okD1gHaIN&mediaurl=https%3a%2f%2fcdn5.vectorstock.com%2fi%2f1000x1000%2f51%2f99%2ficon-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg&exph=1080&expw=974&q=avatar+image+website&simid=608044460370316723&FORM=IRPRST&ck=7B5387198D595C9C315F6A485A52C5FF&selectedIndex=1' title='Username' />
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