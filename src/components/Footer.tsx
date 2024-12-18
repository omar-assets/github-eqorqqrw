import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone } from 'lucide-react';
import { APP_CONFIG, ROUTES } from '@/utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-semibold text-white">
                {APP_CONFIG.APP_NAME}
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming institutional-grade investments into accessible opportunities through innovative fractionalization technology.
            </p>
            <div className="space-y-2">
              <a href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                {APP_CONFIG.CONTACT_EMAIL}
              </a>
              <a href="tel:+12125550123" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                +1 (212) 555-0123
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.MARKETPLACE} className="text-gray-400 hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to={ROUTES.HOW_IT_WORKS} className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.PRIVACY_POLICY} className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={ROUTES.TERMS} className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to={ROUTES.LICENSES} className="text-gray-400 hover:text-white transition-colors">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for investment insights and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} {APP_CONFIG.APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}