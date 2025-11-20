'use client';

import React from 'react';

export default function Hero() {
  return (
    <header className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 px-[5vw] py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#1e293b] to-[#0f172a]">
      {/* 背景グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      {/* グリッドパターン */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="relative flex-1 min-w-[280px] z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 text-[0.65rem] lg:text-[0.8rem] tracking-[0.08em] lg:tracking-[0.12em] uppercase backdrop-blur-md bg-white/5 border border-white/10 rounded-full mb-4 lg:mb-6 shadow-lg">
          <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full animate-pulse" />
          北海道・札幌本社｜輸出入 / 小売・卸
        </div>

        <h1 className="text-[clamp(1.8rem,7vw,4rem)] font-bold mb-4 lg:mb-6 leading-[1.2] lg:leading-[1.1] bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          価値ある北海道産品を、<br />全国と世界へ。
        </h1>

        <p className="text-sm lg:text-lg text-slate-300 mb-8 lg:mb-12 leading-relaxed max-w-xl">
          北海道の良質な一次産品・加工品を国内外へ届ける合同会社AKKの公式サイト。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-full text-sm lg:text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all hover:shadow-[0_25px_50px_rgba(59,130,246,0.4)] hover:-translate-y-1 hover:scale-105"
          >
            お問い合わせ
            <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative flex-1 min-w-[280px] min-h-[300px] lg:min-h-[400px]">
        <div className="relative w-full h-full rounded-2xl lg:rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1586864387634-56f7898d0aa7?auto=format&fit=crop&w=800&q=70"
            alt="北海道の風景"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.85)'
            }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-black/50 pointer-events-none" />
        </div>
      </div>
    </header>
  );
}
