import React from 'react';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-br from-[#4A6FA5] to-[#4A6FA5]/80 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">WarmPaws</h3>
                        <p className="footer-text text-sm text-white">Pet Care in Winter</p>
                    </div>
                    </div>
                    <p className="footer-text text-white/50 leading-relaxed">
                    Professional winter pet care services to keep your beloved companions warm, safe, and healthy all season long.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3">
                    <li>
                        <Link to="/" className="text-white/80 hover:text-white transition-colors">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                        Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="text-white/80 hover:text-white transition-colors">
                        My Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-white/80 hover:text-white transition-colors">
                        Login
                        </Link>
                    </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                    <ul className="space-y-3 text-white/80">
                    <li>Winter Grooming</li>
                    <li>Health Checkups</li>
                    <li>Pet Boarding</li>
                    <li>Walking Services</li>
                    <li>Winter Training</li>
                    <li>Emergency Care</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/80">
                        <MapPin className="size-5 mt-0.5 flex-shrink-0" />
                        <span>123 Pet Street, Winter City, WC 12345</span>
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                        <Phone className="size-5 flex-shrink-0" />
                        <span>+1 (555) 123-4567</span>
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                        <Mail className="size-5 flex-shrink-0" />
                        <span>hello@warmpaws.com</span>
                    </li>
                    </ul>
                </div>
                </div>

                {/* Social & Copyright */}
                <div className="pt-8 border-t border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                    >
                        <Facebook className="size-5" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                    >
                        <Twitter className="size-5" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                    >
                        <Instagram className="size-5" />
                    </a>
                    </div>

                    {/* Copyright & Links */}
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/80">
                    <span>© {currentYear} WarmPaws. All rights reserved.</span>
                    <div className="flex items-center gap-4">
                        <Link to="/privacy" className="hover:text-white transition-colors">
                        Privacy Policy
                        </Link>
                        <Link to="/terms" className="hover:text-white transition-colors">
                        Terms of Service
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;