import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Movva Chenna Kesav',
  description: 'Explore my portfolio of software projects in AI/ML, web development, and system design',
};

export default function Projects() {
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
    },
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Security'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in AI/ML, web development, and software engineering
          </p>
        </div>

        {/* Category Filter (for future enhancement) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-slate-800 text-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                      href={project.github}
                      className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                    >
                      <span>🔗</span> GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
                    >
                      <span>🚀</span> Live Demo
                    </a>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 text-lg mb-4">{project.description}</p>
                <p className="text-gray-400 mb-6">{project.longDescription}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur border border-blue-700/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in collaborating?</h2>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
