import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/MCKesav',
      icon: '/icons/github dark theme.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mckesav',
      icon: '/icons/linkedin.svg',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Movva_Chenna_Kesav',
      icon: '/icons/leetcode dark theme.svg',
    },
    {
      name: 'Gmail',
      url: 'mailto:movva.chenna.kesav@gmail.com',
      icon: '/icons/gmail.svg',
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
              {socialLinks.map((link) => {
                const hoverColors = {
                  GitHub: 'hover:from-slate-300/30 hover:to-white/20 hover:border-slate-300/60',
                  LinkedIn: 'hover:from-blue-500/20 hover:to-blue-600/20 hover:border-blue-500/50',
                  LeetCode: 'hover:from-orange-500/20 hover:to-yellow-500/20 hover:border-orange-500/50',
                  Gmail: 'hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-500/50',
                };
                return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-slate-600/30 ${hoverColors[link.name as keyof typeof hoverColors]}`}
                  title={link.name}
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                    className="transition-opacity"
                  />
                </a>
                );
              })}
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
