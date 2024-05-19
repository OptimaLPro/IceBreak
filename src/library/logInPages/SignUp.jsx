import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "../../assets/css/loginPages.css";
import {
  inputComparison,
  inputValidator,
} from "../../utils/inputsValidators/inputValidators.util";
import { useStyles } from "./loginPagesComponents/loginPagesStyles";

export default function SignUp() {
  const classes = useStyles();

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
        <Typography component="h1" variant="h5" className="textBox">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            classes={{ root: classes.container }}
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
            classes={{ root: classes.container }}
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
            classes={{ root: classes.container }}
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
                classes={{ root: classes.container }}
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
                classes={{ root: classes.container }}
              />
            </Grid>
          </Grid>
          <AwesomeButton
            type="submit"
            className="aws-btn--blue"
            style={{ width: "100%" }}
          >
            Sign In
          </AwesomeButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href="./signin"
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
  );
}
