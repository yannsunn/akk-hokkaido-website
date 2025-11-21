import React from 'react';

export default function Footer() {
  return (
    <footer className="relative mt-12 lg:mt-24 text-center py-12 lg:py-16 backdrop-blur-xl bg-gradient-to-t from-slate-100/95 to-white/80 border-t border-slate-200">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 lg:w-96 h-24 lg:h-32 bg-blue-500/8 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-5 lg:mb-6">
          <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
            合同会社AKK
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 lg:mb-8 text-xs lg:text-sm text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors duration-300 ease-in-out">会社について</a>
          <a href="#business" className="hover:text-blue-600 transition-colors duration-300 ease-in-out">事業内容</a>
          <a href="#company" className="hover:text-blue-600 transition-colors duration-300 ease-in-out">会社概要</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors duration-300 ease-in-out">お問い合わせ</a>
        </div>

        <p className="text-slate-500 text-xs lg:text-sm mb-5 lg:mb-6">
          © 2025 合同会社AKK All Rights Reserved.
        </p>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-full backdrop-blur-sm bg-white/80 border border-slate-200 text-blue-600 hover:text-blue-700 hover:bg-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 shadow-sm hover:shadow-md text-sm lg:text-base"
        >
          <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          PAGE TOP
        </a>
      </div>
    </footer>
  );
}
