import React, { useState, useRef, useEffect } from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { Terminal as TerminalIcon, Play, RefreshCw, Copy, Check } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const SpringTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const initialBanner = (
    <div className="text-spring-400 font-mono text-[11px] leading-tight select-none mb-4">
      <pre>{`
  .   ____          _            __ _ _
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\\__, | / / / /
 =========|_|==============|___/=/_/ /_/
 :: Spring Boot ::               (v3.2.0)
      `}</pre>
      <div className="text-gray-400 text-xs mt-2">
        Started <span className="text-spring-400 font-semibold">SpringPortfolioApplication</span> in 0.842 seconds (JVM running for 1.25)
      </div>
      <div className="text-xs text-gray-500 mt-1">
        Type <span className="text-cyan-400">help</span> or click quick command buttons below to interact.
      </div>
    </div>
  );

  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'curl -X GET /api/v1/profile',
      output: (
        <pre className="text-xs text-emerald-400 bg-obsidian-950/80 p-3 rounded-lg border border-gray-800 my-2 overflow-x-auto">
{JSON.stringify({
  status: 200,
  message: "Spring Boot Microservice Active",
  developer: PROFILE_DATA.name,
  role: PROFILE_DATA.role,
  primaryStack: ["Java 21", "Spring Boot 3", "Spring Security", "PostgreSQL", "Kafka"],
  github: PROFILE_DATA.github,
  email: PROFILE_DATA.email
}, null, 2)}
        </pre>
      )
    }
  ]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="text-xs text-gray-300 space-y-1 my-2">
            <p className="text-spring-400 font-bold">Các lệnh có sẵn:</p>
            <p><span className="text-cyan-400 font-mono">curl /api/v1/profile</span> - Xem JSON Profile của Developer</p>
            <p><span className="text-cyan-400 font-mono">skills</span> - Danh sách kỹ năng Java Spring Boot</p>
            <p><span className="text-cyan-400 font-mono">projects</span> - Danh sách dự án trên GitHub</p>
            <p><span className="text-cyan-400 font-mono">contact</span> - Thông tin liên hệ & GitHub link</p>
            <p><span className="text-cyan-400 font-mono">clear</span> - Xoá màn hình terminal</p>
          </div>
        );
        break;

      case 'curl /api/v1/profile':
      case 'curl -x get /api/v1/profile':
        output = (
          <pre className="text-xs text-emerald-400 bg-obsidian-950/80 p-3 rounded-lg border border-gray-800 my-2 overflow-x-auto">
{JSON.stringify({
  status: 200,
  name: PROFILE_DATA.name,
  role: PROFILE_DATA.role,
  bio: PROFILE_DATA.bio,
  github: PROFILE_DATA.github,
  email: PROFILE_DATA.email
}, null, 2)}
          </pre>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs text-gray-300 space-y-1 my-2">
            <p className="text-spring-400 font-bold">Java Spring Boot Tech Stack:</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {PROFILE_DATA.skills.slice(0, 8).map((s) => (
                <div key={s.name} className="bg-obsidian-900 p-2 rounded border border-gray-800 flex justify-between items-center">
                  <span className="text-white font-medium">{s.name}</span>
                  <span className="text-spring-400 font-mono text-[10px]">[{s.category}]</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs text-gray-300 space-y-2 my-2">
            <p className="text-spring-400 font-bold">GitHub Featured Repositories:</p>
            {PROFILE_DATA.projects.map((p) => (
              <div key={p.id} className="bg-obsidian-900 p-2.5 rounded border border-gray-800">
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">
                  📁 {p.title}
                </a>
                <p className="text-gray-400 text-[11px] mt-1">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs text-gray-300 space-y-1 my-2 bg-obsidian-900 p-3 rounded border border-gray-800">
            <p><span className="text-spring-400 font-bold">Email:</span> {PROFILE_DATA.email}</p>
            <p><span className="text-spring-400 font-bold">GitHub:</span> <a href={PROFILE_DATA.github} target="_blank" className="text-cyan-400 underline">{PROFILE_DATA.github}</a></p>
            <p><span className="text-spring-400 font-bold">Location:</span> {PROFILE_DATA.location}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-xs text-red-400 my-1">
            Command not recognized: '<span className="font-mono">{cmd}</span>'. Type <span className="text-cyan-400">help</span> for commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
  };

  const copyTerminalOutput = () => {
    navigator.clipboard.writeText(`curl -X GET /api/v1/profile\n${PROFILE_DATA.github}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spring-500/10 border border-spring-500/20 text-spring-400 text-xs font-semibold mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Spring Boot CLI Interface
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
            Trải nghiệm tương tác trực tiếp với API CLI giả lập của hệ thống Spring Boot backend.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="glass-panel rounded-2xl border border-gray-800 shadow-2xl overflow-hidden code-window">
          
          {/* Terminal Window Bar */}
          <div className="bg-obsidian-950 px-4 py-3 border-b border-gray-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="ml-2 text-xs font-mono text-gray-400">
                spring-boot@backend:~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                title="Clear Terminal"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={copyTerminalOutput}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-1 text-xs"
                title="Copy output"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-spring-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 bg-obsidian-950/95 font-mono text-sm min-h-[340px] max-h-[480px] overflow-y-auto">
            {initialBanner}

            {history.map((item, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-spring-400 font-bold">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                {item.output}
              </div>
            ))}

            {/* Input Prompt Form */}
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2 mt-3 pt-2 border-t border-gray-800/50">
              <span className="text-spring-400 font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Nhập lệnh (vd: help, skills, projects, curl /api/v1/profile)..."
                className="flex-1 bg-transparent text-gray-200 focus:outline-none font-mono text-sm placeholder-gray-600"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-spring-500/20 hover:bg-spring-500/30 text-spring-400 border border-spring-500/40 rounded text-xs flex items-center gap-1 font-sans font-semibold transition-colors"
              >
                <Play className="w-3 h-3 fill-current" /> Run
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>

          {/* Quick Buttons Toolbar */}
          <div className="bg-obsidian-900 px-4 py-3 border-t border-gray-800 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-gray-400 font-sans font-medium mr-1">Lệnh nhanh:</span>
            {['curl /api/v1/profile', 'skills', 'projects', 'contact', 'help', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded bg-obsidian-800 hover:bg-spring-500/20 hover:text-spring-400 text-gray-300 border border-gray-700 hover:border-spring-500/40 font-mono transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
