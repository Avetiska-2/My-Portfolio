import React from 'react';
import { Heart, Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  console.log('Footer component rendered');

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Mail, href: 'mailto:sn240803@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-hw-gray-900 text-white py-12">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient bg-gradient-to-r from-hw-red-400 to-hw-red-600 bg-clip-text text-transparent">
                Avetis Boiadzhian
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Future Harvard-Westlake Scholar and aspiring Stanford Engineer. 
                Passionate about robotics, technology, and making a positive impact 
                through innovation and excellence.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-hw-red-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-300 hover:text-hw-red-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>Burbank, CA</p>
                <a
                  href="mailto:sn240803@gmail.com"
                  className="hover:text-hw-red-400 transition-colors duration-200 block"
                >
                  sn240803@gmail.com
                </a>
                {/* Phone number removed */}
                <p className="text-sm text-gray-400 mt-4">
                  Available for academic opportunities and project collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Avetis Boiadzhian. All rights reserved.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="mx-2 text-hw-red-500" size={16} />
                <span>and dedication to excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;