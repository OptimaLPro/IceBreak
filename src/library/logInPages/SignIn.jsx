import {
  Box,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { inputValidator } from "../../utils/inputsValidators/inputValidators.util";
import AnimatedPage from "../../theme/AnimatedPage";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigateTo = useNavigate();
  const [validations, setValidations] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    setValidations({
      email: inputValidator("email", email),
      password: inputValidator("password", password),
    });

    axios
      .post("https://icebreak-backend.onrender.com/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data) {
          const accessToken = response.data["accessToken"];
          localStorage.setItem("accessToken", accessToken);
          navigateTo("/");
        } else {
          console.log("Invalid email or password");
        }
      })
      .catch(() => {
        console.error("error");
      });
  };

  return (
    <AnimatedPage>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" className="textBox">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!validations.email}
              helperText={validations.email}
              sx={{
                position: "relative",
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
                "& .MuiOutlinedInput-root": {
                  position: "relative",
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  position: "relative",
                  transform: "translateX(14px) scale(0.75)",
                  color: "white",
                  backgroundColor: "transparent",
                },
                "& .MuiInputBase-input": {
                  color: "black",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!validations.password}
              helperText={validations.password}
              sx={{
                position: "relative",
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
                "& .MuiOutlinedInput-root": {
                  position: "relative",
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  position: "relative",
                  transform: "translateX(14px) scale(0.75)",
                  color: "white",
                  backgroundColor: "transparent",
                },
                "& .MuiInputBase-input": {
                  color: "black",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: 2,
              }}
            >
              <AwesomeButton type="primary" style={{ width: "50%" }}>
                Sign In
              </AwesomeButton>
            </Box>
            <Grid container justifyContent="center" sx={{ marginTop: '20px' }}>
              <Grid item>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: 'white',
                    fontSize: "20px",
                  }}
                  variant="body2"
                  sx={{
                    color: "white",
                  }}
                >
                  or... Create an account!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </AnimatedPage>
  );
};

export default SignIn;
