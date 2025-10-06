import React from 'react'
import StarRating from '../Components/StarRating'
import { testimonialsData } from '../data/content';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Hear It From Our High Scorers
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real results from students who trusted ScoreUp to achieve their dream bands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-8 rounded-2xl shadow-lg border border-indigo-100 flex flex-col justify-between"
          >
            <div>
              <StarRating count={5} />
              <p className="mt-4 text-gray-700 italic text-lg leading-relaxed">"{testimonial.review}"</p>
            </div>
            <div className="mt-6 pt-4 border-t border-indigo-200">
              <p className="font-bold text-indigo-700 text-lg">{testimonial.name}</p>
              <p className="text-sm font-semibold text-gray-500">{testimonial.bandScore}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default TestimonialsSection;
