import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Card({ children, className = '', dark = false }: CardProps) {
  return (
    <article
      className={`group relative p-5 lg:p-8 rounded-2xl lg:rounded-[28px] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(59,130,246,0.2)] ${
        dark
          ? 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.06]'
          : 'bg-slate-700/40 border border-white/10 hover:bg-slate-700/60'
      } ${className}`}
    >
      {/* ホバー時のグロー効果 */}
      <div className="absolute inset-0 rounded-2xl lg:rounded-[28px] bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </article>
  );
}

interface IconCardProps {
  title: string;
  children: React.ReactNode;
}

export function IconCard({ title, children }: IconCardProps) {
  return (
    <Card className="relative overflow-hidden">
      {/* アイコン装飾 */}
      <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />

      {/* アクセントライン */}
      <div className="mb-3 lg:mb-4 flex items-center gap-2 lg:gap-3">
        <div className="w-1 h-10 lg:h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
        <h3 className="mt-0 mb-0 text-lg lg:text-[1.3rem] font-bold text-white">{title}</h3>
      </div>

      <div className="text-sm lg:text-base text-slate-300">
        {children}
      </div>
    </Card>
  );
}
