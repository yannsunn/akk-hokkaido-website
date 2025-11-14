import React from 'react';

export default function Hero() {
  return (
    <header className="flex flex-wrap gap-12 px-[5vw] py-24 bg-gradient-to-br from-[#0c2140] to-[#1a3760] text-white">
      <div className="flex-1 min-w-[280px]">
        <p className="inline-flex items-center gap-2 px-4 py-1.5 text-[0.85rem] tracking-[0.08em] uppercase border border-white/40 rounded-full mb-4">
          北海道・札幌本社｜輸出入 / 小売・卸
        </p>
        <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 leading-tight">
          価値ある北海道産品を、全国と世界へ。
        </h1>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          生産者の想いと生活者の需要をつなぐサプライチェーンを構築し、
          品質管理と資金計画を徹底しながら持続的な成長を実現します。
        </p>
        <ul className="flex flex-wrap gap-6 mb-8 list-none p-0">
          <li className="text-[0.95rem] text-white/85">
            <span className="block text-[1.8rem] font-bold text-white">2019年</span>
            創業
          </li>
          <li className="text-[0.95rem] text-white/85">
            <span className="block text-[1.8rem] font-bold text-white">63社</span>
            取引先
          </li>
          <li className="text-[0.95rem] text-white/85">
            <span className="block text-[1.8rem] font-bold text-white">8カ国</span>
            輸出
          </li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-[#c99a2e] text-[#0c2140] shadow-[0_15px_35px_rgba(201,154,46,0.25)] transition-transform hover:-translate-y-0.5"
          >
            お問い合わせ
          </a>
          <a
            href="/docs/akk-plan.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold border border-white/40 text-white transition-transform hover:-translate-y-0.5"
          >
            事業計画書
          </a>
        </div>
      </div>
      <div
        className="flex-1 min-w-[320px] min-h-[360px] rounded-[32px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80')`
        }}
        role="presentation"
        aria-hidden="true"
      />
    </header>
  );
}
