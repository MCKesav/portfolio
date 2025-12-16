'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  activeDays: number;
  maxStreak: number;
  reputation: number;
}

// Generate heatmap data - will be replaced with real data if available
const generateHeatmapData = () => {
  const data = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setFullYear(startDate.getFullYear() - 1);
  
  const daysInYear = Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  for (let i = 0; i < daysInYear; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    data.push({ date, count: 0 });
  }
  return data;
};

const badges = [
  { name: '100 Days Badge 2025!', image: '/leetcode badges/100 Days Badge 2025! badge image.png', gif: '/leetcode badges/100 Days Badge 2025! badge.gif', card: '/leetcode badges/100 Days Badge 2025! card.png' },
  { name: '50 Days Badge 2025!', image: '/leetcode badges/50 Days Badge 2025! badge image.png', gif: '/leetcode badges/50 Days Badge 2025! badge.gif', card: '/leetcode badges/50 Days Badge 2025! card.png' },
  { name: '100 Days Badge 2024!', image: '/leetcode badges/100 Days Badge 2024! badge image.jpg', gif: '/leetcode badges/100 Days Badge 2024! badge.gif', card: '/leetcode badges/100 Days Badge 2024! card.png' },
  { name: '50 Days Badge 2024!', image: '/leetcode badges/50 Days Badge 2024! badge image.jpg', gif: '/leetcode badges/50 Days Badge 2024! badge.gif', card: '/leetcode badges/50 Days Badge 2024! card.png' },
];

export default function LeetCodeStats({ username = 'Movva_Chenna_Kesav' }: { username?: string }) {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('recent-ac');
  const [heatmapData, setHeatmapData] = useState(generateHeatmapData());
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
  const [selectedBadge, setSelectedBadge] = useState<typeof badges[0] | null>(null);
  const [submissionStats, setSubmissionStats] = useState({ total: 361, activeDays: 158, maxStreak: 20 });

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        // Fetch basic stats
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        
        // Try to fetch submission calendar from alfa-leetcode-api
        try {
          console.log('Fetching real-time submission data from LeetCode...');
          const calendarResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`);
          if (calendarResponse.ok) {
            const calendarData = await calendarResponse.json();
            console.log('✅ Real-time LeetCode data fetched successfully!');
            
            // Process calendar data
            if (calendarData.submissionCalendar) {
              const submissions = JSON.parse(calendarData.submissionCalendar);
              const newHeatmapData = generateHeatmapData();
              let totalSubmissions = 0;
              let activeDaysSet = new Set<string>();
              
              // Map submission data to heatmap
              Object.entries(submissions).forEach(([timestamp, count]) => {
                const date = new Date(parseInt(timestamp) * 1000);
                const dayData = newHeatmapData.find(d => 
                  d.date.toDateString() === date.toDateString()
                );
                if (dayData && typeof count === 'number') {
                  dayData.count = count;
                  totalSubmissions += count;
                  if (count > 0) activeDaysSet.add(date.toDateString());
                }
              });
              
              // Calculate max streak
              let currentStreak = 0;
              let maxStreak = 0;
              const sortedData = [...newHeatmapData].sort((a, b) => a.date.getTime() - b.date.getTime());
              
              for (let i = 0; i < sortedData.length; i++) {
                if (sortedData[i].count > 0) {
                  currentStreak++;
                  maxStreak = Math.max(maxStreak, currentStreak);
                } else {
                  currentStreak = 0;
                }
              }
              
              console.log(`📊 Stats: ${totalSubmissions} submissions, ${activeDaysSet.size} active days, ${maxStreak} max streak`);
              
              setHeatmapData(newHeatmapData);
              setSubmissionStats({
                total: totalSubmissions,
                activeDays: activeDaysSet.size,
                maxStreak: maxStreak
              });
            }
          } else {
            console.warn('Calendar API returned error:', calendarResponse.status);
          }
        } catch (calendarError) {
          console.warn('⚠️ Could not fetch real-time calendar data, using fallback estimates');
          console.error(calendarError);
        }
        
        setData({
          totalSolved: result.totalSolved || 376,
          totalQuestions: result.totalQuestions || 3778,
          easySolved: result.easySolved || 145,
          totalEasy: result.totalEasy || 917,
          mediumSolved: result.mediumSolved || 200,
          totalMedium: result.totalMedium || 1969,
          hardSolved: result.hardSolved || 31,
          totalHard: result.totalHard || 892,
          ranking: result.ranking || 290262,
          activeDays: submissionStats.activeDays,
          maxStreak: submissionStats.maxStreak,
          reputation: 4,
        });
        setLoading(false);
      } catch (err) {
        setData({
          totalSolved: 376,
          totalQuestions: 3778,
          easySolved: 145,
          totalEasy: 917,
          mediumSolved: 200,
          totalMedium: 1969,
          hardSolved: 31,
          totalHard: 892,
          ranking: 290262,
          activeDays: 158,
          maxStreak: 20,
          reputation: 4,
        });
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, [username, submissionStats.activeDays, submissionStats.maxStreak]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!data) return null;

  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  // Group heatmap by weeks
  const weeks: { date: Date; count: number }[][] = [];
  let currentWeek: { date: Date; count: number }[] = [];
  
  heatmapData.forEach((day, index) => {
    currentWeek.push(day);
    if (day.date.getDay() === 6 || index === heatmapData.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  const recentProblems = [
    { title: 'Perfect Number', time: '5 days ago' },
    { title: 'Reverse Integer', time: '6 days ago' },
    { title: 'Count the Digits That Divide a Number', time: '6 days ago' },
  ];

  return (
    <div className="space-y-4">
      {/* LeetCode Header - Centered Logo and Profile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <a 
          href={`https://leetcode.com/u/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 group hover:opacity-80 transition-opacity"
        >
          <Image 
            src="/icons/leetcode dark theme.svg"
            alt="LeetCode"
            width={64}
            height={64}
            className="dark:block hidden"
          />
          <Image 
            src="/icons/leetcode white theme.svg"
            alt="LeetCode"
            width={64}
            height={64}
            className="dark:hidden block"
          />
          <div>
            <h2 className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">LeetCode Profile</h2>
            <p className="text-gray-400 text-sm group-hover:text-orange-300 transition-colors">@{username}</p>
          </div>
        </a>
      </motion.div>

      {/* Badge Card Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(20,20,30,0.6) 50%, rgba(0,0,0,0.5) 100%)',
              backdropFilter: 'blur(8px)',
            }}
            onClick={() => setSelectedBadge(null)}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - positioned at top right of image */}
              <button
                onClick={() => setSelectedBadge(null)}
                className="absolute -top-4 -right-4 bg-black/70 hover:bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all z-20 backdrop-blur-sm border-2 border-white/30 shadow-lg"
              >
                ✕
              </button>
              
              {/* Glow effect behind the card */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 blur-3xl rounded-3xl" />
              
              <Image
                src={selectedBadge.card}
                alt={selectedBadge.name}
                width={500}
                height={700}
                className="relative rounded-xl shadow-2xl"
                style={{ maxHeight: '85vh', maxWidth: '90vw', width: 'auto', height: 'auto', objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Stats Section - Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Circular Progress + Difficulty Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#282828] border border-[#3d3d3d] rounded-lg p-6 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {/* Circular Progress */}
          <div className="relative w-40 h-40 flex-shrink-0">
            <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 128 128">
              {/* Background circle */}
              <circle cx="64" cy="64" r={radius} stroke="#3d3d3d" strokeWidth="10" fill="none" />
              
              {/* Easy (Cyan/Teal) */}
              <circle cx="64" cy="64" r={radius} stroke="#2cbb5d" strokeWidth="10" fill="none"
                strokeDasharray={`${(data.easySolved / data.totalQuestions) * circumference} ${circumference}`}
                strokeLinecap="round" className="transition-all duration-1000" />
              
              {/* Medium (Yellow/Orange) */}
              <circle cx="64" cy="64" r={radius} stroke="#ffc01e" strokeWidth="10" fill="none"
                strokeDasharray={`${(data.mediumSolved / data.totalQuestions) * circumference} ${circumference}`}
                strokeDashoffset={-((data.easySolved / data.totalQuestions) * circumference)}
                strokeLinecap="round" className="transition-all duration-1000" />
              
              {/* Hard (Red) */}
              <circle cx="64" cy="64" r={radius} stroke="#ef4743" strokeWidth="10" fill="none"
                strokeDasharray={`${(data.hardSolved / data.totalQuestions) * circumference} ${circumference}`}
                strokeDashoffset={-(((data.easySolved + data.mediumSolved) / data.totalQuestions) * circumference)}
                strokeLinecap="round" className="transition-all duration-1000" />
            </svg>
            
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">{data.totalSolved}</span>
                <span className="text-gray-500 text-sm">/{data.totalQuestions}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Solved
              </div>
              <div className="text-gray-500 text-xs mt-2">4 Attempting</div>
            </div>
          </div>

          {/* Difficulty Stats */}
          <div className="flex flex-col gap-3 w-full max-w-[200px]">
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-[#ffffff0a] rounded-lg px-8 py-3 border border-[#3d3d3d] cursor-pointer transition-colors hover:border-[#00b8a3]/50 hover:bg-[#00b8a3]/10"
            >
              <div className="text-[#00b8a3] text-xs font-medium text-center">Easy</div>
              <div className="text-white text-center">
                <span className="text-lg font-semibold">{data.easySolved}</span>
                <span className="text-gray-500 text-sm">/{data.totalEasy}</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-[#ffffff0a] rounded-lg px-8 py-3 border border-[#3d3d3d] cursor-pointer transition-colors hover:border-[#ffc01e]/50 hover:bg-[#ffc01e]/10"
            >
              <div className="text-[#ffc01e] text-xs font-medium text-center">Med.</div>
              <div className="text-white text-center">
                <span className="text-lg font-semibold">{data.mediumSolved}</span>
                <span className="text-gray-500 text-sm">/{data.totalMedium}</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-[#ffffff0a] rounded-lg px-8 py-3 border border-[#3d3d3d] cursor-pointer transition-colors hover:border-[#ef4743]/50 hover:bg-[#ef4743]/10"
            >
              <div className="text-[#ef4743] text-xs font-medium text-center">Hard</div>
              <div className="text-white text-center">
                <span className="text-lg font-semibold">{data.hardSolved}</span>
                <span className="text-gray-500 text-sm">/{data.totalHard}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Badges Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#282828] border border-[#3d3d3d] rounded-lg p-6 flex flex-col items-center justify-center"
        >
          <div className="text-gray-400 text-sm mb-2">Badges</div>
          <div className="text-4xl font-bold text-white mb-3">4</div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => setHoveredBadge(badge.name)}
                onHoverEnd={() => setHoveredBadge(null)}
                onClick={() => setSelectedBadge(badge)}
              >
                <Image
                  src={hoveredBadge === badge.name ? badge.gif : badge.image}
                  alt={badge.name}
                  width={70}
                  height={70}
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
          <div className="text-gray-500 text-xs text-center">Most Recent Badge</div>
          <div className="text-white text-sm font-medium text-center">100 Days Badge 2025</div>
        </motion.div>
      </div>

      {/* Submission Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-[#282828] border border-[#3d3d3d] rounded-lg p-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{submissionStats.total}</span>
            <span className="text-gray-400">submissions in the past one year</span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-400">Total active days: <span className="text-white">{submissionStats.activeDays}</span></span>
            <span className="text-gray-400">Max streak: <span className="text-white">{submissionStats.maxStreak}</span></span>
            <button className="flex items-center gap-1 text-gray-400 bg-[#3d3d3d] px-3 py-1 rounded-md text-sm">
              Current
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto px-2 py-2">
          <div className="flex gap-[3px] min-w-max">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
                  const day = week.find(d => d.date.getDay() === dayOfWeek);
                  const intensity = day ? Math.min(day.count / 4, 1) : 0;
                  const bgColor = intensity === 0 ? '#161b22' : 
                    intensity < 0.25 ? '#0e4429' :
                    intensity < 0.5 ? '#006d32' :
                    intensity < 0.75 ? '#26a641' : '#39d353';
                  return (
                    <motion.div
                      key={dayOfWeek}
                      whileHover={{ 
                        scale: 1.5,
                        zIndex: 10,
                        boxShadow: `0 0 10px ${bgColor}`,
                        borderColor: '#ffffff50'
                      }}
                      className="w-[11px] h-[11px] rounded-[2px] cursor-pointer border border-transparent transition-all"
                      style={{
                        backgroundColor: bgColor
                      }}
                      title={day ? `${day.count} submission${day.count !== 1 ? 's' : ''} on ${day.date.toLocaleDateString()}` : 'No submissions'}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-2 text-xs text-gray-500 px-1">
          {['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
            <span key={i}>{month}</span>
          ))}
        </div>
      </motion.div>

      {/* Tabs and Recent Submissions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-[#282828] border border-[#3d3d3d] rounded-lg overflow-hidden"
      >
        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-[#3d3d3d] px-4">
          <div className="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 text-white border-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Recent AC
          </div>
          <a
            href={`https://leetcode.com/u/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
          >
            View all submissions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Recent Problems */}
        <div className="divide-y divide-[#3d3d3d]">
          {recentProblems.map((problem, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="flex justify-between items-center px-6 py-4 cursor-pointer transition-all"
            >
              <span className="text-white font-medium">{problem.title}</span>
              <span className="text-gray-500 text-sm">{problem.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
