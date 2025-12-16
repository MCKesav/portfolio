'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SkillsVisualization from '../components/SkillsVisualization';
import LeetCodeStats from '../components/LeetCodeStats';

export default function About() {
  const skills = {
    languages: ['Python', 'C', 'Rust', 'JavaScript', 'C++', 'SQL', 'HTML/CSS', 'Java'],
    libraries: ['Pandas', 'Matplotlib', 'Transformers', 'BeautifulSoup'],
    tools: ['GitHub', 'VSCode', 'Jupyter Notebook', 'Bootstrap', 'Linux', 'Docker', 'AWS', 'Kafka'],
    frameworks: ['Spring Boot', 'Next.js', 'React'],
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Computer Science Fundamentals',
      'System Design and Integration',
    ],
    softSkills: [
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
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              <Image
                src="/images/kesav pfp.jpg"
                alt="Movva Chenna Kesav"
                width={150}
                height={150}
                className="relative rounded-full border-4 border-slate-800 shadow-2xl object-cover"
              />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Software Engineer & AI/ML Enthusiast passionate about building scalable applications
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -8, scale: 1.015 }}
          className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 mb-12 hover:border-blue-500/50 transition-all duration-300"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="relative">
          <h2 className="text-3xl font-bold text-white mb-6">Professional Background</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I&apos;m a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at 
              Gandhi Institute of Technology and Management (GITAM), Visakhapatnam. My journey in technology is driven by 
              a passion for solving complex problems through innovative software solutions.
            </p>
            <p>
              Currently, I&apos;m focused on building scalable distributed systems, exploring natural language processing techniques, 
              and leveraging cloud technologies. My experience at JPMorgan Chase & Co. as a Software Engineer Intern has given 
              me hands-on exposure to enterprise-grade technologies like Apache Kafka, Spring Boot, and CI/CD pipelines.
            </p>
            <p>
              I believe in continuous learning and staying updated with the latest technological advancements. Whether it&apos;s 
              implementing machine learning models, building web applications, or architecting robust backend systems, I approach 
              every project with dedication and a commitment to excellence.
            </p>
          </div>
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
          <motion.div 
            whileHover={{ y: -8, scale: 1.015 }}
            className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300"
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
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>Integrated Apache Kafka to enable robust asynchronous communication and real-time data streaming across distributed systems</li>
              <li>Automated project setup and environment configuration, reducing onboarding time for new developers</li>
              <li>Gained hands-on experience with modern enterprise tech stack: Spring Boot, Kafka, H2, RESTful services, and CI/CD tools</li>
            </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* LeetCode Stats */}
        <div className="mb-12">
          <LeetCodeStats username="Movva_Chenna_Kesav" />
        </div>

        {/* Skills Visualization */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Proficiency</h2>
          <SkillsVisualization />
        </div>

        {/* Technical Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, idx) => (
                  <motion.span 
                    key={lang} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-sm cursor-default"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
              </div>
            </motion.div>

            {/* Libraries */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Libraries & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.libraries, ...skills.frameworks].map((lib, idx) => (
                  <motion.span 
                    key={lib} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full text-sm cursor-default"
                  >
                    {lib}
                  </motion.span>
                ))}
              </div>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, idx) => (
                  <motion.span 
                    key={tool} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-sm cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
              </div>
            </motion.div>

            {/* Coursework */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {skills.coursework.map((course, idx) => (
                  <motion.span 
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-sm cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Soft Skills</h2>
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative flex flex-wrap gap-3 justify-center">
              {skills.softSkills.map((skill, idx) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Achievements & Activities</h2>
          <div className="space-y-6">
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-gradient-to-r from-yellow-900/50 to-amber-900/50 backdrop-blur border border-yellow-700/50 rounded-lg p-8 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🏆</span>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Amazon ML Summer School</h3>
                  <p className="text-gray-300 mb-2">Selected from a pool of around 200,000 applicants (2025)</p>
                  <p className="text-gray-400 text-sm">Competitive program for machine learning enthusiasts</p>
                </div>
              </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🎓</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Internshala Student Partner</h3>
                  <p className="text-gray-300 mb-2">Collaborated with Internshala to promote opportunities among peers</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li>Promoted internship services through social media and campus events</li>
                    <li>Organized marketing campaigns to increase student engagement</li>
                  </ul>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
