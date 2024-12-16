import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    {
      label: 'About Us',
      href: '/about',
      submenu: [
        { label: 'About Jestone', href: '/about' },
        { label: 'Partnerships', href: '/partnerships' },
        { label: 'Refer and Earn', href: '/refer-and-earn' },
        { label: 'Study Loans', href: '/student-loans' }
      ]
    },
    { label: 'Services', href: '/services' },
    { label: 'Programs & Courses', href: '/programs' },
    { label: 'Study Destinations', href: '/study-destinations' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center py-2">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`flex items-center ${
                      isActive(item.href)
                        ? 'text-primary-500'
                        : 'text-gray-700 hover:text-primary-500'
                    } transition-colors`}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`${
                      isActive(item.href)
                        ? 'text-primary-500'
                        : 'text-gray-700 hover:text-primary-500'
                    } transition-colors`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.submenu && (
                  <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 ${
                    openSubmenu === item.label ? 'block' : 'hidden group-hover:block'
                  }`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-primary-500"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-3 py-2 text-gray-700 hover:text-primary-500"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 ${
                      isActive(item.href)
                        ? 'text-primary-500'
                        : 'text-gray-700 hover:text-primary-500'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block w-full text-left px-3 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}