import { useSelector } from 'react-redux';

// Custom hook to access planner state from Redux store
const usePlanner = () => {
  const { weeklyPlan, isLoading, error } = useSelector((state) => state.planner);

  return {
    weeklyPlan,
    isLoading,
    error,
  };
};

export default usePlanner;
