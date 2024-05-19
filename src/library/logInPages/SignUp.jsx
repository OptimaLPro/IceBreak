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
import { Link } from "react-router-dom";
import "../../assets/css/loginPages.css";
import AnimatedPage from "../../theme/AnimatedPage";
import {
  inputComparison,
  inputValidator,
} from "../../utils/inputsValidators/inputValidators.util";

export default function SignUp() {
  const [validations, setValidations] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    setValidations({
      firstName: inputValidator("firstName", data.get("firstName")),
      lastName: inputValidator("lastName", data.get("lastName")),
      email: inputValidator("email", data.get("email")),
      password: inputValidator("password", data.get("confirmPassword")),
      confirmPassword: inputComparison(
        "confirmPassword",
        password,
        confirmPassword
      ),
    });

    if (
      !validations.firstName &&
      !validations.lastName &&
      !validations.email &&
      !validations.password &&
      !validations.confirmPassword
    ) {
      try {
        // Make POST request using Axios
        const response = await axios
          .post("https://icebreak-backend.onrender.com/users/createUser", {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
            confirmPassword: data.get("confirmPassword"),
          })
          .then(() => {
            setAuthenticated(true);
            window.location.href = "/signin";
          });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
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
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              className="customTextField"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              error={!!validations.firstName}
              helperText={validations.firstName}
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
              id="lastName"
              label="Last name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              error={!!validations.lastName}
              helperText={validations.lastName}
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
              autoComplete="password"
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm password"
              type="password"
              id="confirmPassword"
              error={!!validations.confirmPassword}
              helperText={validations.confirmPassword}
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
              }}
            >
              <AwesomeButton type="primary" style={{ width: "50%", marginTop: '16px' }}>
                Sign Up
              </AwesomeButton>
            </Box>
            <Grid container justifyContent="center" sx={{ marginTop: '20px' }}>
              <Grid item>
                <Link
                  to="/signin"
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
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </AnimatedPage>
  );
}
