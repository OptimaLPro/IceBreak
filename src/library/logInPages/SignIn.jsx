import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import "../../assets/css/loginPages.css";
import "../../utils/inputsValidators/inputValidators.util.js";
import {
  validateEmail,
  validatePassword,
} from "../../utils/inputsValidators/inputValidators.util.js";

const messagesErrors = {
  email: "Please enter a valid email address",
  password: "Password must be at least 8 characters ",
};

const emailValidate = (value, setter) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const test = emailRegex.test(value);
  setter(test ? "" : messagesErrors.email);
};

const SignIn = () => {
  const [validations, setValidations] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    emailValidate(formData.get("email"), setEmailError);

    const newValidations = {
      email: validateEmail(formData.get("email")),
      password: validatePassword(formData.get("password")),
    };

    setValidations(newValidations);

    if (Object.values(newValidations).every((isValid) => isValid)) {
      const validFormData = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      console.log(validFormData);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={!validations.email}
            helperText={emailError}
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
            error={!validations.password}
            helperText={
              !validations.password && "Password must be at least 8 characters"
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
