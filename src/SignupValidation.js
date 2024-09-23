export default function Validation(values) {
  let errors = {};

  // Name validation
  if (!values.name.trim()) {
      errors.name = "Name is required";
  } else {
      errors.name = "";
  }

  // Email validation
  if (!values.email) {
      errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
  } else {
      errors.email = "";
  }

  // Password validation
  if (!values.password) {
      errors.password = "Password is required";
  } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
  } else if (!/\d/.test(values.password)) {
      errors.password = "Password must contain at least one number";
  } else {
      errors.password = "";
  }

  return errors;
}
