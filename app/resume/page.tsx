import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Movva Chenna Kesav',
  description: 'View and download the resume of Movva Chenna Kesav - Software Engineer & AI/ML Enthusiast',
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Download my complete resume or view the summary below
          </p>
          <a
            href="/resume/MCHENNAKESAV_RESUME_mod.pdf"
            download
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            📄 Download PDF Resume
          </a>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🎓</span> Education
          </h2>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">Bachelor of Technology</h3>
                <p className="text-lg text-cyan-400">Computer Science and Engineering (AI & ML)</p>
                <p className="text-gray-300 mt-2">Gandhi Institute of Technology and Management, Visakhapatnam</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">2023 - 2027</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>💼</span> Experience
          </h2>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8">
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
        </div>

        {/* Projects Summary */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🚀</span> Projects
          </h2>
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
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

            {/* Project 2 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-colors">
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

            {/* Project 3 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
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
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>⚡</span> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Languages</h3>
              <p className="text-gray-300 text-sm">Python, C, Rust, JavaScript, C++, SQL, HTML+CSS, Java</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Libraries</h3>
              <p className="text-gray-300 text-sm">Pandas, Matplotlib, Transformers, BeautifulSoup</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Tools</h3>
              <p className="text-gray-300 text-sm">GitHub, VSCode, Jupyter, Bootstrap, Linux, Docker, AWS, Kafka</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Coursework</h3>
              <p className="text-gray-300 text-sm">Data Structures, Algorithms, OS, OOP, DBMS, System Design</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🏆</span> Achievements
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-900/50 to-amber-900/50 backdrop-blur border border-yellow-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Amazon ML Summer School</h3>
              <p className="text-gray-300">Selected from a pool of around 200,000 applicants (2025)</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Internshala Student Partner</h3>
              <p className="text-gray-300">Promoted opportunities and organized marketing campaigns for student engagement</p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>💡</span> Soft Skills
          </h2>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <div className="flex flex-wrap gap-3">
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
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-3 py-1.5 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
