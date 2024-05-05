import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import FixedBottomNavigation from "./profilePageComponents/FixedBottomNavigation";
import "./profilePage.css";


const ProfilePage = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          {/* Add your profile content here */}
          <div className="avatar-container">
            <Avatar
              alt="John Doe"
              src="/path/to/your-image.jpg"
              className="avatar"
              sx={{ width: 125, height: 125, marginBottom: "30px", marginRight: "100px", color: "GrayText", backgroundColor: "salmon" }}
            />
            <AwesomeButton type="secondary">Edit Avatar</AwesomeButton>
          </div>
          <p>Username: JohnDoe</p>
          <p>Email: johndoe@example.com</p>
        </div>
        <div className="Data-table">
          <FixedBottomNavigation />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;