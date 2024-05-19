import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { inputValidator } from "../../utils/inputsValidators/inputValidators.util";
import { useStyles } from "./loginPagesComponents/loginPagesStyles";

const SignIn = () => {
  const classes = useStyles();

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
            classes={{ root: classes.container }}
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
            classes={{ root: classes.container }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 2,
            }}
          >
            <AwesomeButton
              type="submit"
              className="aws-btn--blue"
              style={{ width: "100%" }}
            >
              Sign In
            </AwesomeButton>
          </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href="./signup"
                variant="body2"
                sx={{
                  color: "white",
                }}
              >
                Create an account
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
