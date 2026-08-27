import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spring-500/10 border border-spring-500/20 text-spring-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Kinh nghiệm & Học vấn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Interactive CV & Career Journey
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            Hành trình phát triển kỹ năng lập trình Java Backend qua các vị trí thực tế và dự án quy mô doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-spring-500/10 rounded-xl border border-spring-500/30 text-spring-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Kinh nghiệm Làm việc</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-gray-800 space-y-10">
              {PROFILE_DATA.experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node Icon */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-obsidian-900 border-2 border-spring-500 group-hover:scale-125 transition-transform" />

                  <div className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-spring-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-spring-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-sm font-semibold text-gray-400 mb-4">{exp.company}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-spring-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stacks */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/80">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-obsidian-900 text-gray-400 text-[11px] font-mono rounded border border-gray-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Học vấn</h3>
              </div>

              {PROFILE_DATA.education.map((edu) => (
                <div key={edu.id} className="glass-panel p-6 rounded-2xl border border-gray-800 mb-4">
                  <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                  <h4 className="text-base font-bold text-white mt-1">{edu.degree}</h4>
                  <p className="text-xs font-semibold text-gray-400 mt-0.5">{edu.institution}</p>
                  <p className="text-xs text-gray-300 mt-3 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Chứng chỉ & Bằng cấp</h3>
              </div>

              <div className="space-y-3">
                {PROFILE_DATA.certifications.map((cert, i) => (
                  <div key={i} className="p-4 bg-obsidian-950 rounded-xl border border-gray-800/80 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs text-gray-200 font-semibold">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
