'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 90, color: 'from-yellow-400 to-yellow-600' },
      { name: 'JavaScript', level: 75, color: 'from-yellow-300 to-yellow-500' },
      { name: 'C/C++', level: 70, color: 'from-blue-400 to-blue-600' },
      { name: 'Java', level: 65, color: 'from-red-400 to-red-600' },
      { name: 'Rust', level: 50, color: 'from-orange-400 to-orange-600' },
      { name: 'SQL', level: 75, color: 'from-cyan-400 to-cyan-600' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '🚀',
    skills: [
      { name: 'React/Next.js', level: 70, color: 'from-cyan-400 to-blue-500' },
      { name: 'Spring Boot', level: 60, color: 'from-green-400 to-green-600' },
      { name: 'Transformers (NLP)', level: 75, color: 'from-purple-400 to-purple-600' },
      { name: 'Pandas/Matplotlib', level: 85, color: 'from-blue-400 to-purple-500' },
      { name: 'BeautifulSoup', level: 80, color: 'from-green-300 to-green-500' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git/GitHub', level: 85, color: 'from-gray-400 to-gray-600' },
      { name: 'Docker', level: 60, color: 'from-blue-400 to-blue-600' },
      { name: 'AWS', level: 55, color: 'from-orange-400 to-orange-600' },
      { name: 'Apache Kafka', level: 65, color: 'from-red-400 to-red-600' },
      { name: 'Linux', level: 70, color: 'from-yellow-500 to-yellow-700' },
    ],
  },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ x: 5, scale: 1.02 }}
      className="space-y-2 cursor-default"
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden group">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative group-hover:shadow-lg transition-shadow duration-300`}
          style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0)' }}
          whileHover={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" style={{ animationDuration: '2s' }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsVisualization() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
        <span>⚡</span>
        Skills Proficiency
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span>{category.icon}</span>
              {category.title}
            </h4>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skill.name} skill={skill} index={skillIndex} />
              ))}
            </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span>Expert (80%+)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span>Advanced (60-79%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <span>Intermediate (40-59%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500" />
          <span>Learning (&lt;40%)</span>
        </div>
      </div>
    </motion.div>
  );
}
