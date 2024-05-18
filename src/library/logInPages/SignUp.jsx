import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../../assets/css/loginPages.css";
import {
  inputComparison,
  inputValidator,
} from "../../utils/inputsValidators/inputValidators.util";
import axios from "axios";
import { AwesomeButton } from "react-awesome-button";

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
          .post("http://localhost:8080/users/createUser", {
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
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
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
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
              />
            </Grid>
          </Grid>
          <AwesomeButton
            type="submit"
            className="aws-btn--blue"
            style={{ width: "100%" }}
          >
            Sign Up
          </AwesomeButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="./signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
