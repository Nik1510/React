import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const PersonalizedRoadmap: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { title: 'Career Assessment', description: 'Take our comprehensive quiz to assess your skills and interests.' },
    { title: 'Goal Setting', description: 'Define your short-term and long-term career objectives.' },
    { title: 'Skill Gap Analysis', description: 'Identify areas for improvement and skill development.' },
    { title: 'Custom Roadmap', description: 'Receive a personalized plan to achieve your career goals.' },
    { title: 'Progress Tracking', description: 'Monitor your progress and adjust your roadmap as needed.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Personalized Career Roadmap</h1>
      <p className="text-lg mb-8">
        Follow these steps to create your customized career development plan. Our AI-powered system will guide you through each stage, providing tailored advice and resources.
      </p>
      <div className="mb-8">
        {steps.map((step, index) => (
          <div key={index} className={`flex items-start mb-4 ${currentStep > index + 1 ? 'text-green-600' : 'text-gray-600'}`}>
            <div className="mr-4">
              {currentStep > index + 1 ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <div className={`w-6 h-6 rounded-full ${currentStep === index + 1 ? 'bg-blue-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold`}>
                  {index + 1}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length))}
        >
          {currentStep < steps.length ? 'Next Step' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default PersonalizedRoadmap;