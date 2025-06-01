import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  const defaultUser = {
    photoURL: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    displayName: "Guest User"
  };

  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-2019-1597680-1350125.png" alt="Logo" />
        <div className='header__input'>
          <SearchIcon />
          <input placeholder="Search Facebook" type='text'></input>
        </div>
      </div>

      <div className="header__middle">
        <div className="header_option header_option--active">
          <HomeIcon fontSize='large'/>
        </div>
        <div className="header_option">
          <FlagIcon fontSize='large'/>
        </div>
        <div className="header_option">
          <SubscriptionsIcon fontSize='large'/>
        </div>
        <div className="header_option">
          <StorefrontIcon fontSize='large'/>
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize='large'/>
        </div>
      </div>
      
      <div className="header__right">
        <div className="header_info">
          <Avatar src={defaultUser.photoURL} />
          <h4>{defaultUser.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
         
        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;