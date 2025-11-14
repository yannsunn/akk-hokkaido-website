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
      className={`py-20 px-[5vw] my-6 max-w-[1200px] mx-auto rounded-[32px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] ${
        dark ? 'bg-[#0c2140] text-white' : 'bg-white'
      } ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="mb-8">
        <p className={`tracking-[0.2em] text-[0.8rem] m-0 mb-2 ${dark ? 'text-[#fcd9a5]' : 'text-[#c99a2e]'}`}>
          {label}
        </p>
        <h2 id={`${id}-title`} className="m-0 mb-8 text-[1.9rem] font-bold">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
