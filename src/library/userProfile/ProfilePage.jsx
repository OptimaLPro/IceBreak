import React from "react";
import Avatar from "@mui/material/Avatar";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import "./profilePage.css";
import AnimatedPage from "../../theme/AnimatedPage";
import dummyData from "./dummyData";

const ProfilePage = () => {
  return (
    <>
    <AnimatedPage>
      <div className="container">
        <div className="content">
          <div className="avatar-container">
            <Avatar
              alt= {dummyData.name}
              src= {dummyData.avatar}
              className="avatar"
              sx={{ width: 125, height: 125, marginBottom: "30px", marginRight: "100px", color: "GrayText", backgroundColor: "salmon" }}
            />
            <AwesomeButton type="secondary">Edit Avatar</AwesomeButton>
          </div>
          <p>Hello {dummyData.name}!</p>
          <p>Email: {dummyData.email}</p>
        </div>
        <div className="Data-table">
          <FixedBottomNavigation />
        </div>
      </div>
    </AnimatedPage>
    </>
  );
}

export default ProfilePage;