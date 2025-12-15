import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/MCKesav',
      icon: '🔗',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mckesav',
      icon: '💼',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Movva_Chenna_Kesav',
      icon: '💻',
    },
    {
      name: 'Email',
      url: 'mailto:movva.chenna.kesav@gmail.com',
      icon: '✉️',
    },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              Movva Chenna Kesav
            </h3>
            <p className="text-sm text-gray-400">Software Engineer & AI/ML Enthusiast</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Movva Chenna Kesav. All rights reserved. | Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
