import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { Coffee, Zap, ShieldCheck, Database, Cloud, Server, Activity, Layers, Box, GitBranch, Globe, Code2, Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', 'Core Backend', 'Database & Caching', 'Architecture & DevOps', 'Tools & Web'];

  const filteredSkills = activeCategory === 'Tất cả'
    ? PROFILE_DATA.skills
    : PROFILE_DATA.skills.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-6 h-6 text-amber-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-spring-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Database': return <Database className="w-6 h-6 text-cyan-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-400" />;
      case 'Server': return <Server className="w-6 h-6 text-red-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-purple-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'Box': return <Box className="w-6 h-6 text-blue-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-orange-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-teal-400" />;
      default: return <Code2 className="w-6 h-6 text-spring-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spring-500/10 border border-spring-500/20 text-spring-400 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Kỹ năng Chuyên môn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Java & Spring Boot Tech Matrix
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">
            Hệ thống kỹ năng backend toàn diện được rèn luyện qua các dự án thực tế, tập trung vào khả năng mở rộng, tính sẵn sàng cao và mã nguồn sạch.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-spring-500 text-obsidian-900 shadow-lg shadow-spring-500/20 scale-105'
                  : 'bg-obsidian-800/80 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl border relative overflow-hidden flex flex-col justify-between ${
                skill.highlight ? 'border-spring-500/40 bg-spring-500/[0.03]' : 'border-gray-800'
              }`}
            >
              {skill.highlight && (
                <div className="absolute top-0 right-0 bg-spring-500 text-obsidian-900 font-extrabold text-[10px] uppercase px-3 py-0.5 rounded-bl-lg tracking-wider">
                  Core Skill
                </div>
              )}

              <div>
                {/* Skill Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-obsidian-900/90 rounded-xl border border-gray-800 shadow-inner">
                    {getIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-spring-400 font-mono">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5 font-mono">
                  <span className="text-gray-400">Mastery</span>
                  <span className="text-spring-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-obsidian-950 h-2 rounded-full overflow-hidden border border-gray-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-spring-600 via-spring-400 to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
