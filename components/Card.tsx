import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Card({ children, className = '', dark = false }: CardProps) {
  return (
    <article
      className={`p-7 border rounded-[24px] ${
        dark
          ? 'bg-white/[0.07] border-white/20'
          : 'bg-[#fdfdff] border-[#e0e7ff]'
      } ${className}`}
    >
      {children}
    </article>
  );
}

interface IconCardProps {
  title: string;
  children: React.ReactNode;
}

export function IconCard({ title, children }: IconCardProps) {
  return (
    <Card className="relative pt-12">
      <div className="absolute top-4 left-7 w-10 h-1 rounded-sm bg-[#c99a2e]" />
      <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">{title}</h3>
      {children}
    </Card>
  );
}
