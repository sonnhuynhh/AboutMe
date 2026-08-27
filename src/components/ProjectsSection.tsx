import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { ExternalLink, Star, GitFork, CheckCircle, Code, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract unique tech tags
  const allTags = ['All', ...Array.from(new Set(PROFILE_DATA.projects.flatMap((p) => p.tags)))];

  const filteredProjects = selectedTag === 'All'
    ? PROFILE_DATA.projects
    : PROFILE_DATA.projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-20 relative bg-obsidian-950/40 border-y border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spring-500/10 border border-spring-500/20 text-spring-400 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>GitHub Showcases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Java & Spring Boot Repositories
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">
            Các dự án Backend được thiết kế nguyên mẫu theo chuẩn Enterprise Microservices, tối ưu hoá hiệu năng và có sẵn mã nguồn công khai trên GitHub.
          </p>
        </div>

        {/* Filter Tags Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-spring-500 text-obsidian-900 font-bold shadow-md shadow-spring-500/20'
                  : 'bg-obsidian-800 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-gray-800 flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2.5 rounded-xl bg-obsidian-900 text-spring-400 border border-gray-800">
                      <Code className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-[11px] font-mono text-spring-400 uppercase tracking-wider">
                        {project.featured ? 'Featured Microservice' : 'GitHub Repository'}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-spring-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Stars / Forks Badges */}
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                    {project.starsCount && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        {project.starsCount}
                      </span>
                    )}
                    {project.forksCount && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                        {project.forksCount}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Architecture Highlights Bullet Points */}
                <div className="mb-6 bg-obsidian-950/70 p-4 rounded-2xl border border-gray-800/80">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2 font-mono">
                    Architecture Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {project.architectureHighlights.map((item, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-spring-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-obsidian-900 text-gray-300 text-xs font-mono rounded-lg border border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-obsidian-800 hover:bg-spring-500 hover:text-obsidian-900 text-gray-200 text-xs font-bold rounded-xl border border-gray-700 hover:border-spring-500 transition-all flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Xem Repo GitHub</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-spring-400 hover:text-spring-300 flex items-center gap-1 font-medium"
                  >
                    <span>Chi tiết Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
