import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* Profile Introduction */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Movva Chenna Kesav
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Software Engineer & AI/ML Enthusiast
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable applications and leveraging AI/ML to solve real-world problems.
            Currently exploring distributed systems, NLP, and cloud technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
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
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-12">
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
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Tech Stack & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'C++', 'Rust', 'SQL', 'Java'].map((lang) => (
                <span key={lang} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-colors">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {['GitHub', 'Docker', 'AWS', 'Linux', 'VSCode', 'Kafka'].map((tool) => (
                <span key={tool} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {['AI/ML', 'Data Structures', 'System Design', 'NLP', 'Cloud'].map((spec) => (
                <span key={spec} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
            <div key={index} className={`bg-gradient-to-br ${project.gradient} backdrop-blur border border-slate-700 rounded-lg p-6 ${project.borderColor} hover:shadow-xl ${project.shadowColor} ${project.hoverGradient} transition-all duration-300 transform hover:-translate-y-2 hover:scale-110`}>
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className={`${project.techColors} px-2 py-1 rounded text-xs font-medium`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border-2 border-blue-400 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 font-semibold rounded-lg hover:from-blue-500/20 hover:to-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </div>
  );
}
