export const inputsControl = {
  email: {
    error: "Please enter a valid email address",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    error: "Password must be at least 8 characters ",
    regex: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
  },
};

export const inputValidator = (field, value, setter) => {
  const test = inputsControl[field].regex.test(value);
  setter(test ? "" : inputsControl[field].error);
};

export const emailValidator = inputValidator(
  inputsControl.email,
  formData.get("email"),
  inputsControl.email.regex
);

export const passwordValidator = inputValidator(
  inputsControl.password,
  formData.get("password"),
  inputsControl.password.regex
);
