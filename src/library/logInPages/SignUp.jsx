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

export default function SignUp() {
  const [validations, setValidations] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
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
