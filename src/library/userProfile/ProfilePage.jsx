import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import "./profilePage.css";
import AnimatedPage from "../../theme/AnimatedPage";
import { getUserData } from "./userData";
import { Favorite } from "@mui/icons-material";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    history: [],
    Favorites: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        console.log("Fetched user data:", data); 
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      <AnimatedPage>
        <div className="container2">
          <div className="content">
            <div className="avatar-container">
              {userData && (
                <Avatar
                  alt={`${userData.firstName}`}
                  src={userData.avatar}
                  className="avatar"
                  sx={{
                    width: 125,
                    height: 125,
                    marginBottom: "30px",
                    marginRight: "100px",
                    color: "GrayText",
                    backgroundColor: "salmon"
                  }}
                />
              )}
              {/* <AwesomeButton type="secondary">Edit Avatar</AwesomeButton> */}
            </div>
            {userData && (
              <>
                <p>Hello {userData.firstName}!</p>
                <p>Email: {userData.email}</p>
              </>
            )}
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