import React from "react";
import Menu from "./components/Menu";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import FixedBottomNavigation from "./FixedBottomNavigation";
import "./profilePage.css";


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
              sx={{ width: 150, height: 150, marginBottom: "30px", marginLeft: "125px", color: "GrayText", backgroundColor: "salmon" }}
            />
            <AwesomeButton type="secondary">Edit Avatar</AwesomeButton>
          </div>
          <p>Username: JohnDoe</p>
          <p>Email: johndoe@example.com</p>
          <div className="Data-table">
            <FixedBottomNavigation />
          </div>
        </div>
        {/* <div className="button-container">
            <Button variant="outlined" color="secondary">Log out</Button>
          </div> */}
      </div>
    </>
  );
}

export default ProfilePage;