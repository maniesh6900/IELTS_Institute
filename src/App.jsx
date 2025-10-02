import React, { useState } from 'react';
import { Menu, X, BookOpen, Mic, FileText, Brain, Star, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Speaking Practice",
      description: "One-on-one sessions with expert trainers to boost your speaking confidence and fluency."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Mock Tests",
      description: "Full-length practice tests simulating real IELTS exam conditions with detailed feedback."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Band Score Prediction",
      description: "Get instant band score estimates powered by AI to track your progress accurately."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Study Materials",
      description: "Access comprehensive resources, tips, and strategies for all four IELTS modules."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      score: "Band 8.5",
      text: "The speaking practice sessions were invaluable. I achieved my target score in just 6 weeks!",
      image: "PS"
    },
    {
      name: "Rahul Mehta",
      score: "Band 8.0",
      text: "Mock tests helped me understand the exam pattern perfectly. Highly recommend this institute!",
      image: "RM"
    },
    {
      name: "Ananya Singh",
      score: "Band 7.5",
      text: "The AI band score predictor kept me motivated and helped me focus on weak areas. Excellent service!",
      image: "AS"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  EliteIELTS
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition font-medium">Courses</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</a>
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition transform hover:scale-105">
                Book Free Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#courses" className="block text-gray-700 hover:text-blue-600 font-medium">Courses</a>
              <a href="#features" className="block text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-lg">
                Book Free Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🎯 Achieve Your Dream Score
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Master IELTS with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Expert Guidance
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join thousands of successful students who achieved Band 7+ scores. Get personalized coaching, AI-powered practice, and proven strategies to excel in your IELTS exam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
                  View Course Details
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10,000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">8.2</div>
                  <div className="text-gray-600">Avg. Band Score</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition duration-500">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Students studying"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-4 border-blue-500">
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <div>
                      <div className="font-bold text-gray-900">4.9/5</div>
                      <div className="text-xs text-gray-600">Student Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose EliteIELTS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach combines traditional teaching methods with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our students who achieved their dream scores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-blue-600 font-semibold">{testimonial.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">EliteIELTS</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for IELTS success. Achieve your dreams with expert guidance.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Mock Tests</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Study Materials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Practice Tests</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Tips & Tricks</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">info@eliteielts.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">New Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 EliteIELTS. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}