'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (replace with actual email service like EmailJS)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'movva.chenna.kesav@gmail.com',
      link: 'mailto:movva.chenna.kesav@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91-XXXXXXXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Visakhapatnam, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '/icons/github dark theme.svg',
      url: 'https://github.com/MCKesav',
      color: 'hover:from-slate-300/40 hover:to-white/30 hover:border-slate-300/60',
    },
    {
      name: 'LinkedIn',
      icon: '/icons/linkedin.svg',
      url: 'https://www.linkedin.com/in/mckesav',
      color: 'hover:from-blue-500/30 hover:to-blue-600/30 hover:border-blue-500/50',
    },
    {
      name: 'LeetCode',
      icon: '/icons/leetcode dark theme.svg',
      url: 'https://leetcode.com/u/Movva_Chenna_Kesav',
      color: 'hover:from-orange-500/30 hover:to-yellow-500/30 hover:border-orange-500/50',
    },
    {
      name: 'Gmail',
      icon: '/icons/gmail.svg',
      url: 'mailto:movva.chenna.kesav@gmail.com',
      color: 'hover:from-green-500/30 hover:to-emerald-500/30 hover:border-green-500/50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-600/30 backdrop-blur-sm ${social.color}`}
                  >
                    <div className="p-2 rounded-lg bg-slate-800/50">
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-gray-300 font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur border border-blue-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">💡 Quick Response</h3>
              <p className="text-gray-300 text-sm">
                I typically respond within 24-48 hours. For urgent inquiries, please reach out via email or LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-900/50 border border-green-700 rounded-lg p-4 text-green-300 text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 text-red-300 text-center">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Looking to hire or collaborate?</h2>
            <p className="text-gray-300 mb-6">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume"
                className="px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                View My Resume
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
