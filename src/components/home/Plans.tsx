"use client"
import React, { useState } from 'react';

const plansData = [
  {
    name: "Basic Plan",
    price: "₹2999/month",
    features: [
      "Breakfast, Lunch & Dinner",
      "Weekly Menu",
      "Home-cooked meals",
      "Support local cooks",
    ],
  },
  {
    name: "Standard Plan",
    price: "₹3999/month",
    features: [
      "All meals from Basic Plan",
      "Extra snacks included",
      "Priority delivery",
      "Customizable menu",
    ],
  },
  {
    name: "Premium Plan",
    price: "₹4999/month",
    features: [
      "All meals from Standard Plan",
      "Special diet options",
      "Personalized chef support",
      "Faster delivery",
    ],
  },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Standard Plan
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly or yearly
  
  const handlePlanSelect = (index:number) => {
    setSelectedPlan(index);
  };
  
  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };
  
  // Calculate yearly prices (20% discount)
  const getYearlyPrice = (price:string) => {
    const monthlyPrice = parseInt(price.replace(/[^0-9]/g, ''));
    const yearlyPrice = monthlyPrice * 12 * 0.8; // 20% discount
    return `₹${Math.round(yearlyPrice/12)}/month`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose Your Perfect <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Fresh, home-cooked meals delivered to your doorstep. Simple, flexible, and delicious.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center space-x-4">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              type="button"
              className="relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              role="switch"
              aria-checked={billingCycle === 'yearly'}
              onClick={toggleBillingCycle}
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>
                Yearly
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-0.5 text-sm font-medium text-emerald-800">
                Save 20%
              </span>
            </div>
          </div>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                selectedPlan === index
                  ? 'ring-4 ring-orange-500 transform scale-105 bg-white'
                  : 'bg-white'
              } ${plan.name === "Premium Plan" ? 'border-2 border-orange-500' : 'border border-gray-200'}`}
              onClick={() => handlePlanSelect(index)}
            >
              {/* Most Popular Badge */}
              {plan.name === "Premium Plan" && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-600 to-orange-300 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                    <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Content */}
              <div className="p-8">
                {/* Plan Name */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  {selectedPlan === index && (
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-100">
                      <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </div>
                
                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {billingCycle === 'monthly' 
                        ? plan.price.split('/')[0] 
                        : getYearlyPrice(plan.price).split('/')[0]
                      }
                    </span>
                    <span className="ml-2 text-lg font-medium text-gray-500">
                      /{billingCycle === 'monthly' ? 'month' : 'month'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="mt-2 text-sm text-gray-500">
                      Billed annually at ₹{parseInt(plan.price.replace(/[^0-9]/g, '')) * 12 * 0.8}
                    </p>
                  )}
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-6 w-6 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Get Started Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    selectedPlan === index
                      ? 'bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === index ? (
                    <span className="flex items-center justify-center">
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Selected Plan
                    </span>
                  ) : (
                    'Get Started'
                  )}
                </button>
                
                {/* Premium Perks */}
                {plan.name === "Premium Plan" && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Premium Perks</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        <svg className="mr-1.5 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Free Delivery
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <svg className="mr-1.5 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                          <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        Dietitian Consult
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <svg className="mr-1.5 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Priority Support
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            All plans include free delivery within city limits. Cancel anytime with no hidden fees.
          </p>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                <span className="text-2xl">🍲</span>
              </div>
              <p className="font-semibold text-gray-900">100+ Local Cooks</p>
              <p className="text-sm text-gray-500">Fresh from kitchen</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <span className="text-2xl">⭐</span>
              </div>
              <p className="font-semibold text-gray-900">4.8/5 Rating</p>
              <p className="text-sm text-gray-500">Customer Satisfaction</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <span className="text-2xl">🚚</span>
              </div>
              <p className="font-semibold text-gray-900">30-min Delivery</p>
              <p className="text-sm text-gray-500">On-time Promise</p>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Plans;