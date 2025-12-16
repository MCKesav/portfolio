'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from './components/AnimatedSection';
import PageTransition from './components/PageTransition';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <AnimatedSection className="text-center space-y-8" direction="fade">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              <Image
                src="/images/kesav pfp.jpg"
                alt="Movva Chenna Kesav"
                width={180}
                height={180}
                className="relative rounded-full border-4 border-slate-800 shadow-2xl object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Profile Introduction */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Movva Chenna Kesav
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 font-light"
            >
              Software Engineer & AI/ML Enthusiast
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building scalable applications and leveraging AI/ML to solve real-world problems.
            Currently exploring distributed systems, NLP, and cloud technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-6 justify-center pt-12"
          >
            <a
              href="https://github.com/MCKesav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-slate-300/40 hover:to-white/30 hover:scale-125 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-slate-300/60"
              title="GitHub"
            >
              <Image
                src="/icons/github dark theme.svg"
                alt="GitHub"
                width={28}
                height={28}
                className="transition-all"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mckesav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-blue-500/30 hover:to-cyan-500/30 hover:scale-125 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50"
              title="LinkedIn"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={28}
                height={28}
                className="transition-all"
              />
            </a>
            <a
              href="https://leetcode.com/u/Movva_Chenna_Kesav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-orange-500/30 hover:to-yellow-500/30 hover:scale-125 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-orange-500/50"
              title="LeetCode"
            >
              <Image
                src="/icons/leetcode dark theme.svg"
                alt="LeetCode"
                width={28}
                height={28}
                className="transition-all"
              />
            </a>
            <a
              href="mailto:movva.chenna.kesav@gmail.com"
              className="p-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-green-500/30 hover:to-emerald-500/30 hover:scale-125 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50"
              title="Email"
            >
              <Image
                src="/icons/gmail.svg"
                alt="Email"
                width={28}
                height={28}
                className="transition-all"
              />
            </a>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Skills Overview */}
      <AnimatedSection delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Tech Stack & Skills
          </motion.h2>
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Languages */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'C++', 'Rust', 'SQL', 'Java'].map((lang, index) => (
                <motion.span 
                  key={lang} 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-colors"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {['GitHub', 'Docker', 'AWS', 'Linux', 'VSCode', 'Kafka'].map((tool, index) => (
                <motion.span 
                  key={tool} 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Specializations */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {['AI/ML', 'Data Structures', 'System Design', 'NLP', 'Cloud'].map((spec, index) => (
                <motion.span 
                  key={spec} 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {spec}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        </section>
      </AnimatedSection>

      {/* Featured Projects Preview */}
      <AnimatedSection delay={0.4}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
          {[
            {
              title: 'Webpage Summarizer',
              description: 'NLP-based text summarization using Pegasus model',
              tech: ['Python', 'Transformers', 'NLP'],
              gradient: 'from-purple-900/40 via-blue-900/30 to-indigo-900/60',
              hoverGradient: 'hover:from-purple-800/50 hover:via-blue-800/40 hover:to-indigo-800/70',
              borderColor: 'hover:border-purple-400',
              shadowColor: 'hover:shadow-purple-500/30',
              techColors: 'bg-purple-500/20 text-purple-300'
            },
            {
              title: 'Surf Securely',
              description: 'Phishing link detector for social media platforms',
              tech: ['Python', 'Feature Engineering', 'Security APIs'],
              gradient: 'from-green-900/40 via-teal-900/30 to-emerald-900/60',
              hoverGradient: 'hover:from-green-800/50 hover:via-teal-800/40 hover:to-emerald-800/70',
              borderColor: 'hover:border-green-400',
              shadowColor: 'hover:shadow-green-500/30',
              techColors: 'bg-green-500/20 text-green-300'
            },
            {
              title: 'Price Notification',
              description: 'Real-time price tracking application',
              tech: ['Python', 'BeautifulSoup', 'Web Scraping'],
              gradient: 'from-orange-900/40 via-red-900/30 to-pink-900/60',
              hoverGradient: 'hover:from-orange-800/50 hover:via-red-800/40 hover:to-pink-800/70',
              borderColor: 'hover:border-orange-400',
              shadowColor: 'hover:shadow-orange-500/30',
              techColors: 'bg-orange-500/20 text-orange-300'
            },
          ].map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`bg-gradient-to-br ${project.gradient} backdrop-blur border border-slate-700 rounded-lg p-6 ${project.borderColor} hover:shadow-xl ${project.shadowColor} ${project.hoverGradient} transition-all duration-300 cursor-pointer`}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, techIndex) => (
                  <motion.span 
                    key={t} 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: (index * 0.2) + (techIndex * 0.1) + 0.5 }}
                    className={`${project.techColors} px-2 py-1 rounded text-xs font-medium`}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className="inline-block px-8 py-3 border-2 border-blue-400 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 font-semibold rounded-lg hover:from-blue-500/20 hover:to-cyan-500/20 hover:scale-105 transition-all duration-300"
            >
              View All Projects →
            </Link>
          </motion.div>
        </motion.div>
        </section>
      </AnimatedSection>
    </div>
    </PageTransition>
  );
}
