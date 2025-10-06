import React from 'react'
import HeroVisual from '../assets/HeroVisual'
import { Users } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='bg-gradient-to-br from-indigo-50 to-white py-16 sm:py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row items-center gap-12'>

                <div className='lg:w-1/2 text-center lg:text-left'>
                    <p className='text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3'>
                        Your Path to Global Opportunities
                    </p>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6'>
                        Achieve <span className='text-indigo-600'>Band 7+</span> with Expert IELTS Coaching.
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                        Get personalized training, AI-powered feedback, and guaranteed material to ace your Academic or General Training exam.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <button className="px-8 py-3 bg-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-300 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
                        Start Your Free Trial
                        </button>
                        <button className="px-8 py-3 bg-white border border-indigo-600 text-indigo-600 font-semibold text-lg rounded-xl hover:bg-indigo-50 transition duration-300">
                        Explore Courses
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200 p-8 bg-white/50 border border-indigo-100">
                        <HeroVisual />
                        <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-sm pointer-events-none"></div>
                        <div className="absolute bottom-4 left-4 p-2 bg-white rounded-lg shadow-md flex items-center space-x-2">
                            <Users className="w-5 h-5 text-indigo-600" />
                            <span className="text-sm font-semibold text-gray-700">Trusted by 5,000+ Students</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
