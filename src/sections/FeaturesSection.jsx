import React from 'react'
import { featuresData } from '../data/content'

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
        Everything You Need to Ace the Exam
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Our comprehensive platform is built around three pillars: Expert Instruction, Real-Time Feedback, and Advanced Technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className={`p-4 inline-flex items-center justify-center rounded-xl mb-6 ${feature.color}`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection;
