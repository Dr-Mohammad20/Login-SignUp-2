export const validate = (signupData, loginData) => {
  const errors = {};

  if (!signupData.name.trim()) {
    errors.name = "Please enter the name";
  } else {
    delete errors.name;
  }

  if (!signupData.email) {
    errors.email = "Please enter the email";
  } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
    errors.email = "Email is invalid";
  } else {
    delete errors.email;
  }

  if (!signupData.password) {
    errors.password = "Password is required";
  } else if (signupData.password.length < 6) {
    errors.password = "Password must be larger than 6 character";
  } else {
    delete errors.password;
  }

  if (!signupData.confirmPassword) {
    errors.confirmPassword = "Confirm the password";
  } else if (signupData.confirmPassword !== signupData.password) {
    errors.confirmPassword = "Confirm password not match";
  } else {
    delete errors.confirmPassword;
  }

  if (!signupData.isAccepted) {
    errors.isAccepted = "Please accept the policy statements";
  } else {
    delete errors.isAccepted;
  }

  if (!loginData.userName) {
    errors.userName = "User Name is Required";
  } else if (!/\S+@\S+\.\S+/.test(loginData.userName)) {
    errors.userName = "User Name address is invalid";
  } else {
    delete errors.userName;
  }

  if (!loginData.loginPassword) {
    errors.loginPassword = "password is Required";
  } else if (loginData.loginPassword.length < 6) {
    errors.loginPassword = "password need to be 6 character or more";
  } else {
    delete errors.loginPassword;
  }

  return errors;
};
