// App-wide constants for MealNova

// Meal categories
export const MEAL_CATEGORIES = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snacks',
  'Vegan',
  'Dessert',
];

// Days of the week for planner
export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Meal types for planner slots
export const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner'];

// Sort options for meal listing
export const SORT_OPTIONS = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Top Rated', value: 'rating' },
];

// App routes
export const ROUTES = {
  HOME: '/',
  MEALS: '/meals',
  MEAL_DETAIL: '/meals/:id',
  PLANNER: '/planner',
  CART: '/cart',
  LOGIN: '/login',
  PROFILE: '/profile',
};
