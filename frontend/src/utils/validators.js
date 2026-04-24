// validators.js - Form validation functions for MealNova

// Validate email format
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate password (min 6 chars)
export const isValidPassword = (password) => {
  return password && password.length >= 6;
};

// Validate name (not empty, min 2 chars)
export const isValidName = (name) => {
  return name && name.trim().length >= 2;
};

// Full login form validation
export const validateLoginForm = ({ email, password }) => {
  const errors = {};
  if (!email) errors.email = 'Email is required';
  else if (!isValidEmail(email)) errors.email = 'Enter a valid email address';
  if (!password) errors.password = 'Password is required';
  else if (!isValidPassword(password)) errors.password = 'Password must be at least 6 characters';
  return errors;
};

// Full register form validation
export const validateRegisterForm = ({ name, email, password }) => {
  const errors = {};
  if (!name) errors.name = 'Name is required';
  else if (!isValidName(name)) errors.name = 'Name must be at least 2 characters';
  if (!email) errors.email = 'Email is required';
  else if (!isValidEmail(email)) errors.email = 'Enter a valid email address';
  if (!password) errors.password = 'Password is required';
  else if (!isValidPassword(password)) errors.password = 'Password must be at least 6 characters';
  return errors;
};
