'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    // EmailJS configuration
    const EMAILJS_SERVICE_ID = 'service_r7ndr0t';
    const EMAILJS_TEMPLATE_ID = 'template_imbzerk';
    const EMAILJS_PUBLIC_KEY = 'DQcm4x-ZHmZeiFi5S';

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact directly via email.');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
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
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`flex items-center gap-3 p-4 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg transition-all duration-300 border border-slate-600/30 backdrop-blur-sm ${social.color}`}
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
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur border border-blue-700/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">💡 Quick Response</h3>
              <p className="text-gray-300 text-sm">
                I typically respond within 24-48 hours. For urgent inquiries, please reach out via email or LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
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
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
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
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
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
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
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
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>✓ Sent Successfully!</>
                ) : (
                  <>Send Message</>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-900/50 border border-green-700 rounded-lg p-4 text-green-300 text-center">
                  🎉 Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 text-red-300 text-center">
                  {errorMessage || 'Oops! Something went wrong. Please try again.'}
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Looking to hire or collaborate?</h2>
            <p className="text-gray-300 mb-6">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                View My Resume
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                See My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
