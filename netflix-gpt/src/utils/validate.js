export const validateSignInForm = (email, password) => {
  const emailValidationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordValidationRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailValidationRegex.test(email)) return "Email ID not valid!";

  if (!passwordValidationRegex.test(password)) return "Password not valid!";

  return null;
};

export const validateSignUpForm = (email, password, name) => {
  const emailValidationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordValidationRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!name) return "Enter a name!";

  if (!emailValidationRegex.test(email)) return "Email ID not valid!";

  if (!passwordValidationRegex.test(password)) return "Password not valid!";

  return null;
};
