import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { CONTACT_INFO } from '../constants';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle, X, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS once
    emailjs.init("P1yEwsi8dPB7IOp3A");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(false);
    setShowSuccess(false);

    try {
      await emailjs.send(
        "service_uyxkpip",
        "d6xbjlh",
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      );

      // Show success announcement with effect!
      setShowSuccess(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ca8a04', '#0f172a', '#ffffff'] // Brand colors: Amber, Slate, White
      });

      setFormData({ name: '', company: '', email: '', phone: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error("Failed to send email:", error);
      setErrorMessage("Failed to send email. Please try again.");
      setShowError(true);

      // "Red effect" - Shake animation or just red confetti? 
      // User asked for "red effect", let's do a small red confetti burst to emphasize attention? 
      // Actually, error confetti might be confusing. Visual red banner is key.
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Get In Touch"
          title="Inquire About Office Space"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <p className="text-lg text-slate-600 mb-8">
              Interested in establishing your business at Ho Chi Minh City's most prestigious address? Contact our leasing team for a private viewing.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0 text-brand-dark">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0 text-brand-dark">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-accent transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0 text-brand-dark">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-accent transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0 text-brand-dark">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Success Announcement Banner */}
            {showSuccess && (
              <div className="absolute top-0 left-0 w-full transform -translate-y-full mb-4 z-10 animate-in fade-in slide-in-from-bottom-2">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-sm shadow-md flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-emerald-600" size={20} />
                  <div className="flex-1">
                    <h5 className="font-bold text-sm">Sent Successfully</h5>
                    <p className="text-sm text-emerald-700 mt-1">
                      Your email client has been opened with your inquiry. We look forward to speaking with you.
                    </p>
                  </div>
                  <button onClick={() => setShowSuccess(false)} className="text-emerald-500 hover:text-emerald-800">
                    <X size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Error Announcement Banner (Red Effect) */}
            {showError && (
              <div className="absolute top-0 left-0 w-full transform -translate-y-full mb-4 z-10 animate-in fade-in slide-in-from-bottom-2">
                <div className="bg-rose-50 border border-rose-200 text-rose-800 px-6 py-4 rounded-sm shadow-md flex items-start gap-3">
                  <AlertCircle className="flex-shrink-0 mt-0.5 text-rose-600" size={20} />
                  <div className="flex-1">
                    <h5 className="font-bold text-sm">Failed to Send</h5>
                    <p className="text-sm text-rose-700 mt-1">
                      {errorMessage}
                    </p>
                  </div>
                  <button onClick={() => setShowError(false)} className="text-rose-500 hover:text-rose-800">
                    <X size={18} />
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-slate-50 p-8 md:p-10 rounded-sm shadow-lg border-t-4 border-brand-accent transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                    placeholder="+84 ..."
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                  placeholder="I am interested in viewing..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full flex items-center justify-center gap-2">
                <Send size={18} />
                <span>Send Inquiry via Email</span>
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;