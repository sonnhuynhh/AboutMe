import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PROFILE_DATA } from '../data/profileData';
import { Mail, Send, Copy, Check, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <footer id="contact" className="pt-20 pb-10 relative bg-obsidian-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800/80">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spring-500/10 border border-spring-500/20 text-spring-400 text-xs font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Build Something Great</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Sẵn sàng hợp tác cho dự án Backend Java & Spring Boot?
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Nếu bạn đang tìm kiếm một Backend Engineer am hiểu Java Spring Boot, Microservices và thiết kế hệ thống tối ưu, hãy gửi lời nhắn hoặc liên hệ trực tiếp qua Email / GitHub.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 bg-obsidian-900 rounded-2xl border border-gray-800 flex items-center justify-between gap-4 max-w-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-spring-500/10 rounded-xl text-spring-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block font-mono">DIRECT EMAIL</span>
                  <span className="text-sm font-bold text-white">{PROFILE_DATA.email}</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 bg-obsidian-800 hover:bg-spring-500 hover:text-obsidian-900 text-gray-300 text-xs font-medium rounded-lg border border-gray-700 transition-colors flex items-center gap-1.5"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-spring-400" />
                    <span>Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-obsidian-900 hover:bg-spring-500 hover:text-obsidian-900 text-gray-300 rounded-xl border border-gray-800 transition-all"
                title="GitHub Repositories"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-obsidian-900 hover:bg-cyan-500 hover:text-obsidian-900 text-gray-300 rounded-xl border border-gray-800 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="p-3 bg-obsidian-900 hover:bg-purple-500 hover:text-obsidian-900 text-gray-300 rounded-xl border border-gray-800 transition-all"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">Gửi Tin Nhắn Nhanh</h3>
              <p className="text-xs text-gray-400 mb-6">Tôi sẽ phản hồi trong thời gian sớm nhất.</p>

              {formSent ? (
                <div className="p-6 bg-spring-500/10 border border-spring-500/30 rounded-2xl text-center">
                  <span className="text-2xl mb-2 block">🎉</span>
                  <h4 className="text-base font-bold text-spring-400">Cảm ơn bạn đã liên hệ!</h4>
                  <p className="text-xs text-gray-300 mt-1">Tin nhắn đã được ghi nhận thành công.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-300 font-medium block mb-1.5">Họ & Tên của bạn</label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      className="w-full px-4 py-2.5 bg-obsidian-950 border border-gray-800 rounded-xl text-sm text-white focus:outline-none focus:border-spring-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 font-medium block mb-1.5">Địa chỉ Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-2.5 bg-obsidian-950 border border-gray-800 rounded-xl text-sm text-white focus:outline-none focus:border-spring-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 font-medium block mb-1.5">Nội dung tin nhắn</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Nội dung dự án hoặc đề nghị trao đổi..."
                      className="w-full px-4 py-2.5 bg-obsidian-950 border border-gray-800 rounded-xl text-sm text-white focus:outline-none focus:border-spring-500 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-spring-600 to-spring-500 hover:from-spring-500 hover:to-spring-400 text-obsidian-900 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-spring-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Gửi Tin Nhắn</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-spring-400" />
            <span>Built with React, TypeScript & Framer Motion for Java Spring Boot Engineer.</span>
          </div>
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
