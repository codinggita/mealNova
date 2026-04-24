// Utility helper functions for MealNova

// Format price to 2 decimal places with currency symbol
export const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

// Truncate long text with ellipsis
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

// Convert minutes to readable time (e.g. 90 -> "1 hr 30 min")
export const formatCookTime = (minutes) => {
  if (!minutes) return 'N/A';
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours} hr ${mins} min` : `${hours} hr`;
};

// Get initials from a name (e.g. "John Doe" -> "JD")
export const getInitials = (name) => {
  if (!name) return '?';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Capitalize first letter of a string
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
