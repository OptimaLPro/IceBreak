export const inputsControl = {
  firstName: {
    error: "name can only use hebrew/english letters.",
    regex: /^[a-zA-Zא-ת]+$/u,
  },
  lastName: {
    error: "name can only use hebrew/english letters.",
    regex: /^[a-zA-Zא-ת]+$/u,
  },
  email: {
    error: "Please enter a valid email address",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    error: "Password must be at least 8 characters ",
    regex: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
  },
  confirmPassword: {
    error: "password's are not matching",
  },
};

export const inputValidator = (field, value) => {
  const test = inputsControl[field].regex.test(value);
  return test ? "" : inputsControl[field].error;
};
