import React from 'react';
import { Link } from 'react-router-dom';
import { SUBSCRIPTION_PLANS } from '../services/mockData';

const Pricing = () => {
  return (
    <div className="py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-4 py-2 rounded-full mb-6">
          Subscription Plans
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Choose a plan that fits your appetite. No hidden fees, cancel anytime.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl overflow-hidden border transition-transform hover:-translate-y-2 duration-300 ${
              plan.popular
                ? 'border-orange-400 shadow-xl shadow-orange-100'
                : 'border-gray-100 shadow-sm'
            }`}
          >
            {plan.popular && (
              <div className="bg-orange-600 text-white text-center text-sm font-bold py-2">
                Most Popular ⭐
              </div>
            )}

            <div className={`p-8 ${plan.popular ? 'bg-orange-50' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">₹{plan.price.toLocaleString()}</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-8">
                {plan.mealsPerDay} meal{plan.mealsPerDay > 1 ? 's' : ''}/day • {plan.deliveryDays} days/week
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/login"
                className={`block w-full py-3 text-center font-bold rounded-xl transition-colors ${
                  plan.popular
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ teaser */}
      <div className="text-center bg-gray-50 rounded-2xl p-10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Have questions?</h3>
        <p className="text-gray-500 mb-4">Our team is here to help you pick the right plan.</p>
        <a href="mailto:support@mealnova.com" className="text-orange-600 font-bold hover:underline">
          Contact Support →
        </a>
      </div>
    </div>
  );
};

export default Pricing;
