import React from "react";
import Menu from "./components/Menu";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import "./profilePage.css"; // Import CSS file

const ProfilePage = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="content">
          {/* Add your profile content here */}
          <div className="avatar-container">
            <Avatar
              alt="John Doe"
              src="/path/to/your-image.jpg"
              className="avatar"
              sx={{ width: 150, height: 150, marginBottom: "30px", marginLeft: "40px", color: "GrayText", backgroundColor: "salmon" }}
            />
            <Button variant="outlined" color="secondary">Edit Avatar</Button> {/* Edit Avatar button */}
            
          </div>
          <p>Welcome to your profile page!</p>
          <p>Username: JohnDoe</p>
          <p>Email: johndoe@example.com</p>
          <div className="button-container">
            <Button variant="outlined" color="secondary" startIcon={<HistoryIcon />}>My History</Button>
          </div>
          <div className="button-container">
            <Button variant="outlined" color="secondary" startIcon={<FavoriteOutlinedIcon />}>Favorites</Button>
          </div>
          <div className="button-container">
            <Button variant="outlined" color="secondary">Log out</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;