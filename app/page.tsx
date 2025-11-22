"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, Hammer, Mail, MapPin, Phone } from "lucide-react";

// --- UI Components (本来は別ファイルに分けるべきですが、コピペですぐ動くようにここに記述します) ---

// アニメーション付きセクションラッパー
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// ガラス質感のカード
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl p-8 ${className}`}>
    {children}
  </div>
);

// --- Main Page Component ---

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500/30">
      {/* 背景の装飾（ドットパターン） */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60"
           style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 抽象的な背景グラデーション */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[120px]" />

        <div className="container px-4 md:px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest mb-6">
              HOKKAIDO TO THE WORLD
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6">
              合同会社<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AKK</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
              北海道の価値を、世界へ。<br className="hidden md:block"/>
              小売、輸出入、そして創造的な商品企画で未来を繋ぐ。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#business"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                事業内容を見る <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-300 rounded-full font-semibold shadow-md hover:bg-slate-50 hover:border-blue-500 transition-all"
              >
                お問い合わせ
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* スクロールダウン誘導 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      <main className="relative z-10 space-y-32 pb-32">

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="container px-4 md:px-6 mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-bold text-blue-600 tracking-widest mb-2">ABOUT US</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  北海道から、<br />
                  確かな価値をお届けします。
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  合同会社AKKは、北海道札幌市を拠点とする企業です。
                  私たちは単なる商社ではありません。北海道の豊かな大地が生み出す良質な産品を見出し、
                  国内のみならず世界中のお客様へ「感動」とともにお届けする架け橋です。
                </p>
                <div className="flex gap-4">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1">
                    <div className="text-3xl font-bold text-blue-600 mb-1">Retail</div>
                    <div className="text-xs text-slate-500 font-bold">小売事業</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1">
                    <div className="text-3xl font-bold text-purple-600 mb-1">Global</div>
                    <div className="text-xs text-slate-500 font-bold">輸出入事業</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] bg-slate-200 rounded-[40px] overflow-hidden shadow-2xl">
                {/* ここに本来は北海道やオフィスの画像が入ります */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90 flex items-center justify-center text-white/20 font-bold text-6xl rotate-[-10deg]">
                  AKK HOKKAIDO
                </div>
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=70"
                  alt="Hokkaido Landscape"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* --- BUSINESS SECTION (Bento Grid) --- */}
        <section id="business" className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold text-blue-600 tracking-widest mb-2">OUR BUSINESS</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">事業内容</h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1: 小売 (Large) */}
            <FadeIn delay={0.1} className="md:col-span-2 row-span-1">
              <div className="group relative h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-200 transition-colors" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30">
                      <Building2 size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">小売事業</h4>
                    <p className="text-slate-600 max-w-md">
                      北海道産品を中心とした商品の小売販売を行っています。
                      地元の生産者と直接連携し、市場に出回らない希少な逸品も取り扱います。
                    </p>
                  </div>
                  <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                    View More <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: 輸出入 */}
            <FadeIn delay={0.2} className="md:col-span-1 row-span-1">
              <div className="group relative h-full bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 text-white">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500 rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                      <Globe2 size={24} className="text-blue-300" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">輸出入業務</h4>
                    <p className="text-slate-300 text-sm">
                      国内外の商品の輸出入業務。グローバルな物流ネットワークを活かし、迅速な取引を実現します。
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 3: 企画 (Full Width optional or standard) */}
            <FadeIn delay={0.3} className="md:col-span-3 row-span-1 md:h-[250px]">
              <div className="group relative h-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 flex items-center">
                <div className="grid md:grid-cols-2 gap-8 w-full items-center">
                  <div>
                    <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/30">
                      <Hammer size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">商品の製造・企画</h4>
                    <p className="text-slate-600">
                      市場ニーズを捉えた商品の企画・開発。ゼロからの立ち上げをサポートし、アイデアを形にします。
                    </p>
                  </div>
                  <div className="hidden md:flex justify-center">
                     {/* 装飾的な図形 */}
                     <div className="flex gap-3">
                        <div className="w-20 h-32 bg-white rounded-2xl shadow-md rotate-12 border border-slate-100" />
                        <div className="w-20 h-32 bg-blue-100 rounded-2xl shadow-md -rotate-6 border border-blue-200" />
                     </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- MESSAGE SECTION --- */}
        <section className="container px-4 md:px-6 mx-auto">
          <FadeIn>
            <GlassCard className="max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H7.19943V21H14.017ZM16.017 21V16H19.017C20.1216 16 21.017 16.8954 21.017 18V21H16.017ZM10.017 14H3.017C3.017 10.2103 5.64493 7.03242 9.16687 6.25227L12.017 9.10239L14.8671 6.25227C18.3891 7.03242 21.017 10.2103 21.017 14H14.017V12H10.017V14ZM12.017 3.00006L7.77439 7.24264L8.4815 7.94975L12.017 4.41428L15.5525 7.94975L16.2596 7.24264L12.017 3.00006Z" /></svg>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                  代表メッセージ
                </h2>
                <div className="prose prose-lg text-slate-600 leading-relaxed">
                  <p>
                    はじめまして。代表の山木と申します。<br/>
                    このたびは、合同会社AKKのホームページをご覧いただき、誠にありがとうございます。
                  </p>
                  <p>
                    日々変化する市場環境の中で、お客様一人ひとりのニーズに真摯に向き合い、信頼される商品・サービスの提供を目指してまいります。
                    国内外を問わず、多くの方々に「良いものが届いた」と感じていただけるよう、丁寧な仕事を心がけております。
                  </p>
                  <p>
                    今後とも、合同会社AKKにご愛顧とご支援を賜りますよう、心よりお願い申し上げます。
                  </p>
                </div>
                <div className="mt-8 text-right">
                  <p className="text-slate-400 text-sm mb-1">代表</p>
                  <p className="text-xl font-bold text-slate-900">山木 明洋</p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </section>

        {/* --- COMPANY & CONTACT SPLIT --- */}
        <section id="contact" className="container px-4 md:px-6 mx-auto">
           <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

              {/* 会社概要 & 連絡先 (Left Column) */}
              <FadeIn className="space-y-8">
                <div>
                   <h2 className="text-sm font-bold text-blue-600 tracking-widest mb-2">INFORMATION</h2>
                   <h3 className="text-3xl font-bold text-slate-900 mb-6">会社概要・連絡先</h3>
                   <p className="text-slate-600 mb-8">
                      お取引のご相談、商品に関するお問い合わせなど、お気軽にご連絡ください。
                   </p>
                </div>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8 space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                         <Building2 size={20}/>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">会社名</h4>
                         <p className="text-slate-600">合同会社AKK</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                         <MapPin size={20}/>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">所在地</h4>
                         <p className="text-slate-600">
                            〒064-0808<br/>
                            北海道札幌市中央区南8条西13丁目4-7-405
                         </p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                         <Phone size={20}/>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">電話番号</h4>
                         <p className="text-slate-600">080-3265-8361</p>
                         <p className="text-xs text-slate-400">平日 9:00-18:00</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                         <Mail size={20}/>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">メールアドレス</h4>
                         <a href="mailto:info@akk-hokkaido.com" className="text-blue-600 hover:underline break-all">
                            info@akk-hokkaido.com
                         </a>
                      </div>
                   </div>
                </div>
              </FadeIn>

              {/* お問い合わせフォーム (Right Column) */}
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 lg:p-10">
                   <h3 className="text-2xl font-bold text-slate-900 mb-6">お問い合わせフォーム</h3>
                   <form action="mailto:info@akk-hokkaido.com" method="post" encType="text/plain" className="space-y-5">
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">お名前 <span className="text-red-500">*</span></label>
                         <input type="text" name="name" required placeholder="山田 太郎"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">会社名</label>
                         <input type="text" name="company" placeholder="〇〇株式会社"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">メールアドレス <span className="text-red-500">*</span></label>
                         <input type="email" name="email" required placeholder="example@akk.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">お問い合わせ内容</label>
                         <textarea name="message" rows={4} placeholder="ご用件をご記入ください"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none" />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all mt-4"
                      >
                        送信する
                      </motion.button>
                   </form>
                </div>
              </FadeIn>

           </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="mb-8">
             <span className="text-2xl font-bold text-white">AKK</span>
          </div>
          <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
             <a href="#about" className="hover:text-white transition-colors">About</a>
             <a href="#business" className="hover:text-white transition-colors">Business</a>
             <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Godogaisha AKK. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
