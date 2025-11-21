'use client';

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=70',
      alt: 'ビジネスミーティング'
    },
    {
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=70',
      alt: '物流倉庫の内部'
    },
    {
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=70',
      alt: '貨物コンテナと港'
    },
    {
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=70',
      alt: '新鮮な農産物'
    }
  ];

  useEffect(() => {
    // 残りの画像をバックグラウンドでプリロード
    const preloaders = slides.slice(1).map((slide) => {
      const img = new Image();
      img.src = slide.image;
      return img;
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      preloaders.forEach((img) => {
        img.src = '';
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 px-[5vw] py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* 背景グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-300/10 via-transparent to-transparent pointer-events-none" />

      {/* グリッドパターン */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="relative flex-1 min-w-[280px] z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 text-[0.65rem] lg:text-[0.8rem] tracking-[0.08em] lg:tracking-[0.12em] uppercase backdrop-blur-md bg-blue-600/8 border border-blue-600/15 rounded-full mb-4 lg:mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-600 rounded-full animate-pulse" />
          <span className="text-blue-800 font-medium">北海道・札幌本社｜輸出入 / 小売・卸</span>
        </div>

        <h1 className="text-[clamp(1.8rem,7vw,4rem)] font-bold mb-4 lg:mb-6 leading-[1.2] lg:leading-[1.1] bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 bg-clip-text text-transparent">
          価値ある北海道産品を、<br />全国と世界へ。
        </h1>

        <p className="text-sm lg:text-lg text-slate-800 mb-8 lg:mb-12 leading-relaxed max-w-xl font-medium">
          北海道の良質な一次産品・加工品を国内外へ届ける合同会社AKKの公式サイト。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-sm lg:text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_4px_12px_rgba(59,130,246,0.2)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
          >
            お問い合わせ
            <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative flex-1 min-w-[280px] h-[300px] lg:h-[400px]">
        <div className="relative w-full h-full rounded-2xl lg:rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden bg-white">
          {/* スライダー画像 */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity ${
                index === currentSlide ? 'opacity-100 duration-1000' : 'opacity-0 duration-1000'
              }`}
              style={{
                zIndex: index === currentSlide ? 2 : 1
              }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.95)'
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-slate-900/20 pointer-events-none" />
            </div>
          ))}

          {/* スライダーインジケーター */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                  index === currentSlide
                    ? 'w-8 bg-blue-500'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`スライド ${index + 1} に移動`}
              />
            ))}
          </div>

          {/* ナビゲーションボタン */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-sm bg-white/80 flex items-center justify-center text-slate-700 hover:bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg z-10"
            aria-label="前のスライド"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-sm bg-white/80 flex items-center justify-center text-slate-700 hover:bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg z-10"
            aria-label="次のスライド"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
