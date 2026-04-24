import { useSelector } from 'react-redux';

// Custom hook to access meals state from Redux store
const useMeals = () => {
  const { meals, isLoading, error, selectedMeal, filters } = useSelector((state) => state.meals);

  return {
    meals,
    isLoading,
    error,
    selectedMeal,
    filters,
  };
};

export default useMeals;
