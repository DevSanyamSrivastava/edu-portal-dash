import { GraduationCap, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EduManage</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Streamlining educational management for institutions worldwide with secure, 
              reliable, and user-friendly solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer transition-smooth" />
              <Twitter className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer transition-smooth" />
              <Linkedin className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer transition-smooth" />
              <Mail className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer transition-smooth" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Security</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Documentation</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Training</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; 2024 EduManage. All rights reserved. Built with modern technology for educational excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;