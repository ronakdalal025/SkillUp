import { Facebook, GraduationCap, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Logo/Motto */}
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2 mb-3">
            <GraduationCap className="w-7 h-7 text-indigo-400" />
            <span className="text-2xl font-extrabold">ScoreUp</span>
          </div>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            Empowering students worldwide to achieve their English language proficiency goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-indigo-400">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#courses" className="text-gray-400 hover:text-indigo-300 transition duration-150 text-sm">Our Courses</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-indigo-300 transition duration-150 text-sm">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-300 transition duration-150 text-sm">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-300 transition duration-150 text-sm">FAQs</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-indigo-400">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-indigo-300 transition duration-150 text-sm">Free Materials</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-300 transition duration-150 text-sm">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-300 transition duration-150 text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-300 transition duration-150 text-sm">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-indigo-400">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-gray-400">hello@scoreup.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-gray-400">(+1) 555-IELTS</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gray-500 mt-1" />
              <span className="text-gray-400">123 Global Campus Way, IELTS City, ZZ 90210</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social and Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6">
        <p className="text-gray-500 text-sm order-2 sm:order-1 mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} ScoreUp IELTS Academy. All rights reserved.
        </p>
        <div className="flex space-x-4 order-1 sm:order-2">
          <a href="#" className="text-gray-500 hover:text-indigo-400 transition duration-150">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-400 transition duration-150">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-400 transition duration-150">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
