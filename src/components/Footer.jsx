import React from 'react';
import ThemeToggle from './ThemeToggle';

const Footer = ({ data }) => {
  return (
    <footer className="bg-navy text-white p-6">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul>
            {data.quickLinks.map((link, index) => (
              <li key={index}><a href={link.link} className="hover:text-teal">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold font-poppins mb-2">Theme</h3>
          {/* Dark mode toggle will be implemented later */}
        </div>
        <div>
          <h3 className="font-bold mb-2">Social</h3>
          <div className="flex justify-center space-x-4">
            {data.socialLinks.map((link, index) => (
              <a key={index} href={link.link} className="hover:text-teal">{link.platform}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-8 font-inter">
        <p>{data.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
