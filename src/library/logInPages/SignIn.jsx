import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { inputValidator } from "../../utils/inputsValidators/inputValidators.util";
import { inputStyle } from "../../theme/gerenalTheme";

const SignIn = () => {
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
      .post("http://localhost:8080/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data) {
          const accessToken = response.data["accessToken"];
          localStorage.setItem("accessToken", accessToken);
          window.location.href = "/";
        } else {
          console.log("Invalid email or password");
        }
      })
      .catch(() => {
        console.error("error");
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" className="sign-in-title">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          className="sign-in-title"
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
          />
          <AwesomeButton
            type="submit"
            className="aws-btn--blue"
            style={{ width: "100%" }}
          >
            Sign In
          </AwesomeButton>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
