import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import "../../assets/css/loginPages.css";
import axios from "axios";

const inputsFields = [
  {
    name: "firstName",
    label: "First Name",
    autoComplete: "given-name",
  },
  {
    name: "lastName",
    label: "Last Name",
    autoComplete: "family-name",
  },
  {
    name: "email",
    label: "Email Address",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    autoComplete: "new-password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    autoComplete: "confirm-password",
  },
];

export default function SignUp() {
  const [validations, setValidations] = useState({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = Object.fromEntries(data.entries());

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const newValidations = Object.fromEntries(
      Object.entries(formData).map(([name, value]) => {
        switch (name) {
          case "email":
            return [name, emailRegex.test(value)];
          case "password":
            return [name, value.length >= 8];
          case "confirmPassword":
            return [name, value === formData.password];
          default:
            return [name, !!value];
        }
      })
    );

    setValidations(newValidations);

    if (Object.values(newValidations).every((isValid) => isValid)) {
      console.log(formData);
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {inputsFields.map((field) => (
              <Grid item xs={12} key={field.name}>
                <TextField
                  required
                  fullWidth
                  name={field.name}
                  label={
                    validations[field.name]
                      ? field.label
                      : "Invalid Information"
                  }
                  type={field.type || "text"}
                  id={field.name}
                  autoComplete={field.autoComplete}
                  error={!validations[field.name]}
                  onChange={(e) =>
                    setValidations({
                      ...validations,
                      [field.name]: !!e.target.value,
                    })
                  }
                  InputProps={{ style: { backgroundColor: "inherit" } }}
                  InputLabelProps={{ style: { backgroundColor: "inherit" } }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
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
    </Container>
  );
}
