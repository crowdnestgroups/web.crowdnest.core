import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Twitter, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="logo" width={40} height={40} />
              <span className="text-xl font-bold">CrowdNest</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base">
              Transparent contribution management for communities and
              organizations
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/crowdnest"
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/crowdnest"
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  href="#features"
                  className="hover:text-white transition-colors inline-block"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#models"
                  className="hover:text-white transition-colors inline-block"
                >
                  Models
                </Link>
              </li>
              <li>
                <Link
                  href="#verification"
                  className="hover:text-white transition-colors inline-block"
                >
                  Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-white transition-colors inline-block"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section - Full Width on Mobile */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 shrink-0" />
              <Link
                href="mailto:hello@crowdnest.com"
                className="hover:text-white transition-colors"
              >
                hello@crowdnest.com
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} CrowdNest. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
