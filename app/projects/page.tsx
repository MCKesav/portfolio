'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButton from '../components/ShareButton';

// Project data with images and colors
const projects = [
  {
    title: 'Webpage Summarizer',
    description:
      'A sophisticated web-based text summarization application using advanced NLP techniques to condense long texts into brief, clear summaries while retaining key information.',
    longDescription:
      'Built using the Pegasus model from the Transformers library, this project demonstrates expertise in abstractive summarization. The application utilizes transformer encoder-decoder architecture for fine-tuning, providing high-quality, maintainable code following industry best practices.',
    tech: ['Python', 'Transformers', 'Pegasus Model', 'NLP', 'Deep Learning'],
    features: [
      'Abstractive summarization using state-of-the-art Pegasus model',
      'Web-based interface for easy text input',
      'Fine-tuned transformer architecture for improved accuracy',
      'Focus on code simplicity, durability, and long-term reliability',
    ],
    github: '#',
    demo: '#',
    category: 'AI/ML',
    color: 'from-purple-500 to-pink-500',
    icon: '🤖',
    date: '2024-01',
  },
  {
    title: 'Surf Securely',
    description:
      'A security-focused application that evaluates the authenticity of shortened links on social media platforms like LinkedIn to identify potential phishing threats.',
    longDescription:
      'This project applies advanced feature engineering methods to extract key details from URLs and web pages. It incorporates third-party security APIs to boost prediction accuracy, offering users robust protection against malicious URLs and online threats.',
    tech: ['Python', 'Feature Engineering', 'Security APIs', 'Machine Learning', 'URL Analysis'],
    features: [
      'Advanced URL and web page feature extraction',
      'Integration with third-party security APIs',
      'High accuracy in distinguishing benign vs malicious URLs',
      'Social media platform compatibility (LinkedIn focus)',
    ],
    github: '#',
    demo: '#',
    category: 'Security',
    color: 'from-green-500 to-emerald-500',
    icon: '🔒',
    date: '2024-02',
  },
  {
    title: 'Price Notification (NotifyMe)',
    description:
      'A comprehensive price tracking application designed to empower users to monitor their preferred items\' prices across online stores.',
    longDescription:
      'Built with web scraping capabilities using requests and BeautifulSoup, this application features robust user authentication, real-time price monitoring, and notification systems to alert users when prices drop.',
    tech: ['Python', 'BeautifulSoup', 'Web Scraping', 'SQLite', 'User Authentication'],
    features: [
      'Secure user registration and login functionality',
      'Real-time price monitoring from multiple online stores',
      'Automated price comparison and tracking',
      'Email notifications for price drops',
    ],
    github: '#',
    demo: '#',
    category: 'Web Development',
    color: 'from-blue-500 to-cyan-500',
    icon: '🌐',
    date: '2023-12',
  },
];

const categories = ['All', 'AI/ML', 'Web Development', 'Security'];

// Get all unique technologies
const allTechnologies = [...new Set(projects.flatMap(p => p.tech))].sort();

// Category colors mapping
const categoryColors: Record<string, string> = {
  'AI/ML': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Security': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Web Development': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

type SortOption = 'newest' | 'oldest' | 'a-z' | 'z-a';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tech.some(t => t.toLowerCase().includes(query))
      );
    }

    // Filter by selected technologies
    if (selectedTech.length > 0) {
      result = result.filter(p => 
        selectedTech.some(tech => p.tech.includes(tech))
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => b.date.localeCompare(a.date));
        break;
      case 'oldest':
        result.sort((a, b) => a.date.localeCompare(b.date));
        break;
      case 'a-z':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'z-a':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return result;
  }, [activeCategory, searchQuery, selectedTech, sortBy]);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSelectedTech([]);
    setSortBy('newest');
  };

  const hasActiveFilters = activeCategory !== 'All' || searchQuery || selectedTech.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in AI/ML, web development, and software engineering
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <svg 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/70 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none px-4 py-3 pr-10 bg-slate-800/70 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">A to Z</option>
                <option value="z-a">Z to A</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Filter Toggle */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 rounded-xl border flex items-center gap-2 transition-all ${
                showFilters || selectedTech.length > 0
                  ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                  : 'bg-slate-800/70 border-slate-700 text-gray-300 hover:border-blue-500'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
              {selectedTech.length > 0 && (
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {selectedTech.length}
                </span>
              )}
            </motion.button>
          </div>

          {/* Technology Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Filter by Technology</h3>
                    {selectedTech.length > 0 && (
                      <button 
                        onClick={() => setSelectedTech([])}
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allTechnologies.map((tech) => (
                      <motion.button
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleTech(tech)}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                          selectedTech.includes(tech)
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        {tech}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters & Results Count */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex flex-wrap items-center gap-2">
              {hasActiveFilters && (
                <>
                  <span className="text-gray-400 text-sm">Active filters:</span>
                  {activeCategory !== 'All' && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs flex items-center gap-1">
                      {activeCategory}
                      <button onClick={() => setActiveCategory('All')} className="hover:text-white">×</button>
                    </span>
                  )}
                  {selectedTech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs flex items-center gap-1">
                      {tech}
                      <button onClick={() => toggleTech(tech)} className="hover:text-white">×</button>
                    </span>
                  ))}
                  {searchQuery && (
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs flex items-center gap-1">
                      &quot;{searchQuery}&quot;
                      <button onClick={() => setSearchQuery('')} className="hover:text-white">×</button>
                    </span>
                  )}
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-gray-400 hover:text-white transition-colors underline"
                  >
                    Clear all
                  </button>
                </>
              )}
            </div>
            <span className="text-gray-400 text-sm">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative group"
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                <div className="relative bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Project Screenshot Placeholder */}
                    <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                      
                      {/* Placeholder Image with Project Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            animate={{ 
                              scale: hoveredProject === index ? 1.1 : 1,
                              rotate: hoveredProject === index ? 5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl`}
                          >
                            <span className="text-4xl">{project.icon}</span>
                          </motion.div>
                          <p className="text-gray-400 text-sm">Screenshot Coming Soon</p>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all flex items-center gap-2`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </motion.a>
                      </motion.div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8">
                      {/* Project Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <motion.h2 
                            className="text-2xl md:text-3xl font-bold text-white mb-2"
                            animate={{ color: hoveredProject === index ? '#60a5fa' : '#ffffff' }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.title}
                          </motion.h2>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm border ${categoryColors[project.category]}`}>
                            {project.category}
                          </span>
                        </div>
                        {/* Share Button */}
                        <ShareButton
                          title={`Check out ${project.title}`}
                          text={project.description}
                          url={`/projects#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="hidden md:flex"
                        />
                      </div>

                      {/* Project Description */}
                      <p className="text-gray-300 mb-4">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-lg text-xs font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features Preview */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Key Features</h3>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                            >
                              <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent mt-0.5`}>✓</span>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                          {project.features.length > 3 && (
                            <li className="text-gray-500 text-sm pl-5">
                              +{project.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Mobile Buttons */}
                      <div className="flex gap-3 mt-6 md:hidden">
                        <a
                          href={project.github}
                          className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-center text-sm"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all text-center text-sm`}
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">No projects found in this category.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur border border-blue-700/50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Interested in collaborating?</h2>
              <p className="text-gray-300 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
