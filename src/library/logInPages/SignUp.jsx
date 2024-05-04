import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel } from "@mui/material";
import "../../assets/css/style.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        IceBreak
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [firstNameValid, setFirstNameValid] = React.useState(true);
  const [lastNameValid, setLastNameValid] = React.useState(true);
  const [emailValid, setEmailValid] = React.useState(true);
  const [passwordValid, setPasswordValid] = React.useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = React.useState(true);
  const [passwordsMatch, setPasswordsMatch] = React.useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password");
    const confirmPassword = data.get("confirm-password");
    const email = data.get("email");

    // Email validation using regular expression
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidName = /^[a-zA-Z]+$/;
    setEmailValid(isValidEmail);

    setPasswordsMatch(password === confirmPassword);

    // Password validation
    setPasswordValid(password.length >= 8);

    if (
      !isValidEmail ||
      password !== confirmPassword ||
      password.length < 8 /* add more conditions */
    ) {
      return;
    }

    console.log({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={firstNameValid ? "First Name" : "Invalid Information"}
                  autoFocus
                  error={!firstNameValid}
                  onChange={(e) => setFirstNameValid(!!e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={lastNameValid ? "Last Name" : "Invalid Information"}
                  name="lastName"
                  autoComplete="family-name"
                  error={!lastNameValid}
                  onChange={(e) => setLastNameValid(!!e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={emailValid ? "Email Address" : "Invalid Email"}
                  name="email"
                  autoComplete="email"
                  error={!emailValid}
                  onChange={(e) => setEmailValid(!!e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={passwordValid ? "Password" : "Password is less than 8"}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!passwordValid || !passwordsMatch}
                  onChange={(e) => setPasswordValid(!!e.target.value)}
                  InputProps={{ style: { backgroundColor: "inherit" } }}
                  InputLabelProps={{ style: { backgroundColor: "inherit" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label={
                    confirmPasswordValid
                      ? "Confirm Password"
                      : "Invalid Information"
                  }
                  type="password"
                  id="confirm-password"
                  autoComplete="confirm-password"
                  error={!confirmPasswordValid || !passwordsMatch}
                  onChange={(e) => setConfirmPasswordValid(!!e.target.value)}
                  InputProps={{ style: { backgroundColor: "inherit" } }}
                  InputLabelProps={{ style: { backgroundColor: "inherit" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
                <Link href="./SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
