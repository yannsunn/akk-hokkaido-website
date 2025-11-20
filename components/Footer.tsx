import React from 'react';

export default function Footer() {
  return (
    <footer className="relative mt-12 lg:mt-24 text-center py-12 lg:py-16 backdrop-blur-xl bg-gradient-to-t from-slate-900/90 to-slate-800/60 border-t border-white/5">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 lg:w-96 h-24 lg:h-32 bg-blue-500/5 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-5 lg:mb-6">
          <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            合同会社AKK
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 lg:mb-8 text-xs lg:text-sm text-slate-400">
          <a href="#about" className="hover:text-blue-400 transition-colors">会社について</a>
          <a href="#business" className="hover:text-blue-400 transition-colors">事業内容</a>
          <a href="#company" className="hover:text-blue-400 transition-colors">会社概要</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">お問い合わせ</a>
        </div>

        <p className="text-slate-500 text-xs lg:text-sm mb-5 lg:mb-6">
          © 2025 合同会社AKK All Rights Reserved.
        </p>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-full glass-effect text-blue-400 hover:text-blue-300 transition-all hover:-translate-y-1 text-sm lg:text-base"
        >
          <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          PAGE TOP
        </a>
      </div>
    </footer>
  );
}
