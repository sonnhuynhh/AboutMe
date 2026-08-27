import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { Terminal, ArrowRight, Shield, Cpu, Database, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spring-500/10 border border-spring-500/30 text-spring-400 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm shadow-spring-500/10">
              <span className="w-2 h-2 rounded-full bg-spring-400 animate-ping" />
              <span>Available for Java / Spring Boot Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
              Hi, I'm <span className="text-gradient-spring">{PROFILE_DATA.name}</span> 👋
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300 mt-2 block">
                Backend Architect & Java Developer
              </span>
            </h1>

            {/* Bio paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              {PROFILE_DATA.bio}
            </p>

            {/* Tech Badges Pill Bar */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Java 21', 'Spring Boot 3', 'Spring Cloud', 'Spring Security', 'PostgreSQL', 'Kafka', 'Redis', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-obsidian-800/80 border border-gray-800 rounded-lg text-xs font-mono text-gray-300 flex items-center gap-1.5 hover:border-spring-500/50 hover:text-spring-400 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-spring-500"></span>
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-spring-600 to-spring-500 hover:from-spring-500 hover:to-spring-400 text-obsidian-900 font-bold rounded-xl text-base shadow-lg shadow-spring-500/25 hover:shadow-spring-500/40 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto hover:scale-[1.02]"
              >
                <GithubIcon className="w-5 h-5 text-obsidian-900" />
                <span>Xem GitHub Repos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#terminal"
                className="px-6 py-3.5 bg-obsidian-800 hover:bg-gray-800 text-gray-200 font-semibold rounded-xl text-base border border-gray-700 hover:border-spring-500/50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Terminal className="w-5 h-5 text-spring-400" />
                <span>Spring Terminal</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-800/80 w-full">
              {PROFILE_DATA.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white text-gradient-spring">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Code & Avatar Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glowing Accent Backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-spring-500 to-cyan-500 opacity-20 blur-2xl animate-pulse"></div>

            <div className="relative glass-panel rounded-3xl p-6 border border-gray-800 shadow-2xl overflow-hidden">
              
              {/* Profile Card Header with Avatar */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-800">
                <div className="relative">
                  <img
                    src={PROFILE_DATA.avatarUrl}
                    alt={PROFILE_DATA.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-spring-500/50 shadow-lg shadow-spring-500/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-obsidian-900 p-1 rounded-full border border-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-spring-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{PROFILE_DATA.name}</h3>
                  <p className="text-xs text-spring-400 font-mono font-medium">@spring_boot_dev</p>
                  <p className="text-xs text-gray-400 mt-1">{PROFILE_DATA.location}</p>
                </div>
              </div>

              {/* Spring Boot Microservice Controller Code Preview */}
              <div className="rounded-2xl bg-obsidian-950 p-4 font-mono text-xs border border-gray-800 text-gray-300 overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-800 text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[10px] text-spring-400">AccountController.java</span>
                </div>

                <pre className="leading-relaxed">
                  <code>
<span className="text-purple-400">@RestController</span>{'\n'}
<span className="text-purple-400">@RequestMapping</span>(<span className="text-emerald-300">"/api/v1/accounts"</span>){'\n'}
<span className="text-purple-400">@RequiredArgsConstructor</span>{'\n'}
<span className="text-blue-400">public class</span> <span className="text-yellow-300">AccountController</span> {'{'}{'\n'}
{'  '}<span className="text-purple-400">private final</span> LedgerService ledgerService;{'\n\n'}
{'  '}<span className="text-purple-400">@PostMapping</span>(<span className="text-emerald-300">"/transfer"</span>){'\n'}
{'  '}<span className="text-blue-400">public</span> ResponseEntity&lt;<span className="text-yellow-300">TxResult</span>&gt; transfer({'\n'}
{'    '}<span className="text-purple-400">@Valid @RequestBody</span> TransferReq req{'\n'}
{'  '}) {'{'}{'\n'}
{'    '}<span className="text-blue-400">var</span> result = ledgerService.process(req);{'\n'}
{'    '}<span className="text-purple-400">return</span> ResponseEntity.ok(result);{'\n'}
{'  '}{'}'}{'\n'}
{'}'}
                  </code>
                </pre>
              </div>

              {/* Floating Feature Tags */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400 px-2 pt-2">
                <span className="flex items-center gap-1 text-spring-400">
                  <Shield className="w-3.5 h-3.5" /> Security Enforced
                </span>
                <span className="flex items-center gap-1 text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" /> High TPS Ready
                </span>
                <span className="flex items-center gap-1 text-purple-400">
                  <Database className="w-3.5 h-3.5" /> ACID Compliant
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
