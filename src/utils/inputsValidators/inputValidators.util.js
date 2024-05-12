export const inputsControl = {
  firstName: {
    regexError: "name can only use hebrew/english letters.",
    regex: /^[a-zA-Zא-ת]+$/u,
  },
  lastName: {
    regexError: "name can only use hebrew/english letters.",
    regex: /^[a-zA-Zא-ת]+$/u,
  },
  email: {
    regexError: "Invalid email.",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    regexError: "Password is under 8 characters.",
    regex: /^.{8,}$/,
  },
  confirmPassword: {
    regexError: "Password is under 8 characters.",
    matchError: "Password's aren't matching.",
    regex: /^.{8,}$/,
  },
};

export const inputValidator = (field, value) => {
  const test = inputsControl[field].regex.test(value);
  return test ? "" : inputsControl[field].regexError;
};

export const inputComparison = (field, string1, string2) => {
  const test1 = inputsControl[field].regex.test(string1);
  const test2 = inputsControl[field].regex.test(string2);
  const test3 = string1.localeCompare(string2);
  if (!test1 || !test2) {
    return inputsControl[field].regexError;
  }
  return !test3 ? "" : inputsControl[field].matchError;
};
