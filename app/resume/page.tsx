'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButton from '../components/ShareButton';

// Note: Metadata must be in a separate layout or server component
// export const metadata moved to layout if needed

export default function Resume() {
  const [showToast, setShowToast] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-24 left-1/2 z-50 px-6 py-3 bg-green-500/90 backdrop-blur-lg text-white rounded-xl shadow-lg flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Resume download started!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Download Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.a
          href="/resume/MCHENNAKESAV_RESUME_mod.pdf"
          download
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
        >
          {/* Download Icon with Animation */}
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </motion.svg>
          <span className="hidden md:inline">Download Resume</span>
          <span className="md:hidden">PDF</span>
          
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
        </motion.a>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Download my complete resume or view the summary below
          </p>
          
          {/* Download Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/resume/MCHENNAKESAV_RESUME_mod.pdf"
              download
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">~150 KB</span>
            </motion.a>
            
            <motion.a
              href="/resume/MCHENNAKESAV_RESUME_mod.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800 border border-slate-700 text-white font-semibold rounded-xl hover:border-blue-500 hover:bg-slate-700 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View in New Tab
            </motion.a>

            <ShareButton
              title="Check out my Resume - Movva Chenna Kesav"
              text="Software Engineer & AI/ML Enthusiast | JPMorgan Chase SDE Intern"
              url="/resume"
            />
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🎓</span> Education
          </h2>
          <motion.div 
            whileHover={{ y: -8, scale: 1.015 }}
            className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">Bachelor of Technology</h3>
                <p className="text-lg text-cyan-400">Computer Science and Engineering (AI & ML)</p>
                <p className="text-gray-300 mt-2">Gandhi Institute of Technology and Management, Visakhapatnam</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">2023 - 2027</span>
            </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>💼</span> Experience
          </h2>
          <motion.div 
            whileHover={{ y: -8, scale: 1.015 }}
            className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">Software Engineer (SDE) Intern</h3>
                <p className="text-lg text-cyan-400">JPMorgan Chase & Co.</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">May 2025 - June 2025</span>
            </div>
            <ul className="space-y-3 text-gray-300 list-none">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Integrated Apache Kafka to enable robust asynchronous communication and real-time data streaming across distributed systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Automated project setup and environment configuration, reducing onboarding time for new developers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Gained hands-on experience with modern enterprise tech stack: Spring Boot, Kafka, H2, RESTful services, and CI/CD tools</span>
              </li>
            </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🚀</span> Projects
          </h2>
          <div className="space-y-6">
            {/* Project 1 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.015 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Webpage Summarizer</h3>
              <p className="text-gray-300 mb-3">
                NLP-based text summarization using Pegasus model from Transformers library for abstractive summarization
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Transformers', 'Pegasus', 'NLP'].map((tech) => (
                  <span key={tech} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.015 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Surf Securely</h3>
              <p className="text-gray-300 mb-3">
                Evaluates authenticity of shortened links on social media to identify phishing threats using advanced feature engineering
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Feature Engineering', 'Security APIs'].map((tech) => (
                  <span key={tech} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.015 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Price Notification (NotifyMe)</h3>
              <p className="text-gray-300 mb-3">
                Comprehensive price tracking application with user authentication and real-time price monitoring using web scraping
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'BeautifulSoup', 'Web Scraping'].map((tech) => (
                  <span key={tech} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>⚡</span> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Languages</h3>
              <p className="text-gray-300 text-sm">Python, C, Rust, JavaScript, C++, SQL, HTML+CSS, Java</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Libraries</h3>
              <p className="text-gray-300 text-sm">Pandas, Matplotlib, Transformers, BeautifulSoup</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Tools</h3>
              <p className="text-gray-300 text-sm">GitHub, VSCode, Jupyter, Bootstrap, Linux, Docker, AWS, Kafka</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Coursework</h3>
              <p className="text-gray-300 text-sm">Data Structures, Algorithms, OS, OOP, DBMS, System Design</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🏆</span> Achievements
          </h2>
          <div className="space-y-4">
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-gradient-to-r from-yellow-900/50 to-amber-900/50 backdrop-blur border border-yellow-700/50 rounded-lg p-6 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Amazon ML Summer School</h3>
              <p className="text-gray-300">Selected from a pool of around 200,000 applicants (2025)</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Internshala Student Partner</h3>
              <p className="text-gray-300">Promoted opportunities and organized marketing campaigns for student engagement</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>💡</span> Soft Skills
          </h2>
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative flex flex-wrap gap-3">
              {[
                'Problem Solving',
                'Critical Thinking',
                'Communication',
                'Presentation',
                'Adaptability',
                'Teamwork',
                'Leadership',
                'Time Management',
                'Analytical Thinking',
                'Research Skills',
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-3 py-1.5 rounded-lg text-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
