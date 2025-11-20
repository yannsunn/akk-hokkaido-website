import React from 'react';

interface SectionProps {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function Section({ id, label, title, children, dark = false, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-12 lg:py-24 px-[5vw] my-6 lg:my-12 max-w-[1400px] mx-auto rounded-2xl lg:rounded-[40px] backdrop-blur-xl transition-all duration-500 hover:scale-[1.01] ${
        dark
          ? 'bg-gradient-to-br from-white/90 to-slate-50/90 text-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-200/80'
          : 'bg-gradient-to-br from-white/85 to-blue-50/85 text-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-200/70'
      } ${className}`}
      aria-labelledby={`${id}-title`}
    >
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
            <span className="w-8 lg:w-12 h-[2px] bg-gradient-to-r from-blue-600 to-transparent" />
            <p className={`tracking-[0.2em] lg:tracking-[0.25em] text-[0.65rem] lg:text-[0.75rem] uppercase font-semibold m-0 ${
              dark ? 'text-blue-700' : 'text-blue-600'
            }`}>
              {label}
            </p>
          </div>
          <h2 id={`${id}-title`} className="m-0 text-[1.8rem] lg:text-[2.5rem] font-bold leading-tight bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
