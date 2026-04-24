import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Loader from '../components/Loader';

const MealDetail = () => {
  const { id } = useParams();

  // Placeholder data - will be replaced with Redux/API data
  const meal = {
    id,
    title: 'Grilled Salmon with Asparagus',
    category: 'Dinner',
    rating: 4.8,
    reviews: 128,
    price: 18.99,
    time: 35,
    calories: 420,
    servings: 2,
    description:
      'A beautifully grilled Atlantic salmon fillet served alongside crispy roasted asparagus and a rich lemon butter sauce. This dish is packed with Omega-3s and nutrients, making it the perfect healthy dinner option.',
    ingredients: [
      '2 salmon fillets (6 oz each)',
      '1 bunch of fresh asparagus',
      '2 tbsp olive oil',
      '2 cloves garlic, minced',
      '1 lemon, sliced',
      'Salt and pepper to taste',
      '1 tbsp fresh dill',
    ],
    steps: [
      'Preheat grill to medium-high heat (400°F).',
      'Brush salmon with olive oil, season with salt, pepper, and garlic.',
      'Grill salmon 4-5 minutes per side until cooked through.',
      'Toss asparagus with olive oil and season. Grill for 5-7 minutes.',
      'Squeeze fresh lemon over everything and garnish with dill. Serve hot.',
    ],
  };

  return (
    <div className="py-8 max-w-5xl mx-auto">
      {/* Back link */}
      <Link to="/meals" className="inline-flex items-center text-gray-500 hover:text-orange-600 mb-6 transition-colors">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Meals
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-orange-50 rounded-2xl overflow-hidden h-72 lg:h-auto flex items-center justify-center text-orange-200 font-medium shadow-sm">
          Meal Image
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">{meal.category}</span>
            <div className="flex items-center text-yellow-500 text-sm font-bold">
              ★ {meal.rating}
              <span className="text-gray-400 font-normal ml-1">({meal.reviews} reviews)</span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{meal.title}</h1>
          <p className="text-gray-600 mb-6">{meal.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Cook Time', value: `${meal.time} min` },
              { label: 'Calories', value: `${meal.calories} kcal` },
              { label: 'Servings', value: `${meal.servings} people` },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">{stat.label}</p>
                <p className="text-gray-900 font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-orange-600">${meal.price}</span>
            <Button variant="primary" size="lg">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Ingredients & Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Ingredients</h2>
          <ul className="space-y-3">
            {meal.ingredients.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Instructions</h2>
          <ol className="space-y-4">
            {meal.steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-gray-600">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
