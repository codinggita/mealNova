// formatters.js - Date and number formatting utilities for MealNova

// Format a date string to readable format (e.g. "April 24, 2026")
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Format a date to short form (e.g. "Apr 24")
export const formatShortDate = (dateString) => {
  if (!dateString) return '';
  const options = { month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Format a number with commas (e.g. 12000 -> "12,000")
export const formatNumber = (num) => {
  if (num === null || num === undefined) return '0';
  return num.toLocaleString('en-US');
};

// Format a decimal rating to 1 place (e.g. 4.876 -> "4.9")
export const formatRating = (rating) => {
  if (!rating) return '0.0';
  return parseFloat(rating).toFixed(1);
};

// Get current week's Monday date
export const getCurrentWeekStart = () => {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Monday
  return new Date(now.setDate(diff));
};
