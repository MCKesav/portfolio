'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GitHubStatsProps {
  username: string;
}

export default function GitHubStats({ username }: GitHubStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub Activity
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GitHub Stats Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=60A5FA&text_color=9CA3AF&icon_color=06B6D4`}
            alt="GitHub Stats"
            width={495}
            height={195}
            className="relative w-full h-auto"
            unoptimized
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-green-500/5" />
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=60A5FA&text_color=9CA3AF`}
            alt="Top Languages"
            width={350}
            height={165}
            className="relative w-full h-auto"
            unoptimized
          />
        </motion.div>
      </div>

      {/* Streak Stats */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5" />
        <Image
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=0D1117&ring=60A5FA&fire=06B6D4&currStreakLabel=60A5FA&sideLabels=9CA3AF&currStreakNum=60A5FA&sideNums=9CA3AF&dates=6B7280`}
          alt="GitHub Streak"
          width={495}
          height={195}
          className="relative w-full h-auto mx-auto"
          unoptimized
        />
      </motion.div>

      {/* GitHub Profile Link */}
      <div className="text-center">
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl text-gray-300 hover:border-blue-500 hover:text-white transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Full Profile
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
