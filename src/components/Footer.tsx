import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Social Links */}
          <div>
            <Logo variant="white" />
            <p className="text-gray-400 mt-4">
              Your trusted partner in international education and career guidance.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={32} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={32} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={32} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Jestone
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-gray-400 hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/refer-and-earn" className="text-gray-400 hover:text-white transition-colors">
                  Refer and Earn
                </Link>
              </li>
              <li>
                <Link to="/student-loans" className="text-gray-400 hover:text-white transition-colors">
                  Study Loans
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">
                  Latest News
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#counseling" className="text-gray-400 hover:text-white transition-colors">
                  Academic Counseling
                </Link>
              </li>
              <li>
                <Link to="/services#visa" className="text-gray-400 hover:text-white transition-colors">
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link to="/services#test-prep" className="text-gray-400 hover:text-white transition-colors">
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link to="/study-destinations" className="text-gray-400 hover:text-white transition-colors">
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link to="/services#support" className="text-gray-400 hover:text-white transition-colors">
                  Student Support
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="text-gray-400 w-5 h-5" />
                <a 
                  href="mailto:info@jestone.edu" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@jestone.edu
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gray-400 w-5 h-5" />
                <a 
                  href="tel:+233123456789" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +233 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="text-gray-400 w-5 h-5" />
                <span className="text-gray-400">123 Education St, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="text-gray-400 w-5 h-5" />
                <span className="text-gray-400">Working Hours: 8 AM - 5 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Jestone Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}