import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { inputValidator } from "../../utils/inputsValidators/inputValidators.util";
import axios from "axios";

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
      .get("http://localhost:8080/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Check if authentication was successful
        if (response.data.authenticated) {
          console.log("User connected");
          // You can redirect the user or perform other actions here
        } else {
          console.log("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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