import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { Card } from '@/components/Card';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="top">
      <Hero />

      <main>
        {/* 私たちについて */}
        <Section id="about" label="ABOUT" title="合同会社AKKについて">
          <div className="max-w-3xl mx-auto">
            <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-6">
              合同会社AKKは、北海道札幌市を拠点とする企業です。
              小売、輸出入、商品の製造・企画を行っております。
            </p>
            <p className="text-base lg:text-lg text-slate-700 leading-relaxed">
              北海道の良質な産品を、国内外のお客様へお届けすることを目指しています。
            </p>
          </div>
        </Section>

        {/* 事業内容 */}
        <Section id="business" label="BUSINESS" title="事業内容">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/15 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold text-slate-800">小売</h3>
                <p className="text-slate-700 text-sm lg:text-base">
                  北海道産品を中心とした商品の小売販売を行っています。
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/15 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold text-slate-800">輸出入</h3>
                <p className="text-slate-700 text-sm lg:text-base">
                  国内外の商品の輸出入業務を行っています。
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/15 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold text-slate-800">商品の製造・企画</h3>
                <p className="text-slate-700 text-sm lg:text-base">
                  商品の企画・開発を行っています。
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* 代表メッセージ */}
        <Section id="message" label="MESSAGE" title="代表メッセージ">
          <div className="max-w-3xl mx-auto bg-white/70 p-6 lg:p-8 rounded-2xl border border-slate-200/70 shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
            <div className="text-sm lg:text-base text-slate-700 leading-relaxed space-y-4">
              <p className="mt-0">
                はじめまして。代表の山木と申します。このたびは、合同会社AKKのホームページを
                ご覧いただき、誠にありがとうございます。私たちは小売・商品の企画・輸出入など、
                多岐にわたる事業を展開しております。
              </p>
              <p>
                日々変化する市場環境の中で、お客様一人ひとりのニーズに真摯に向き合い、
                信頼される商品・サービスの提供を目指してまいります。国内外を問わず、
                多くの方々に「良いものが届いた」と感じていただけるよう、丁寧な仕事を心がけ、
                スタッフ一同、日々努力を重ねております。
              </p>
              <p className="mb-0">
                今後とも、合同会社AKKにご愛顧とご支援を賜りますよう、心よりお願い申し上げます。
              </p>
              <p className="mt-6 mb-0 font-semibold text-slate-900 text-right">代表　山木 明洋</p>
            </div>
          </div>
        </Section>

        {/* 会社概要 */}
        <Section id="company" label="COMPANY" title="会社概要">
          <div className="max-w-3xl mx-auto bg-white/70 p-6 lg:p-8 rounded-2xl border border-slate-200/70 shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
            <dl className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 m-0">
              <dt className="font-semibold text-slate-600">会社名</dt>
              <dd className="m-0 text-slate-800">合同会社AKK</dd>

              <dt className="font-semibold text-slate-600">運営統括責任者</dt>
              <dd className="m-0 text-slate-800">山木 明洋</dd>

              <dt className="font-semibold text-slate-600">所在地</dt>
              <dd className="m-0 text-slate-800">〒064-0808<br />北海道札幌市中央区南8条西13丁目4-7-405</dd>

              <dt className="font-semibold text-slate-600">電話番号</dt>
              <dd className="m-0 text-slate-800">080-3265-8361</dd>

              <dt className="font-semibold text-slate-600">メールアドレス</dt>
              <dd className="m-0 text-slate-800">
                <a href="mailto:info@akk-hokkaido.com" className="text-blue-600 hover:text-blue-700 transition-colors underline">
                  info@akk-hokkaido.com
                </a>
              </dd>

              <dt className="font-semibold text-slate-600">ウェブサイト</dt>
              <dd className="m-0 text-slate-800">
                <a href="https://akk-hokkaido.com/" className="text-blue-600 hover:text-blue-700 transition-colors underline break-all">
                  https://akk-hokkaido.com/
                </a>
              </dd>
            </dl>
          </div>
        </Section>

        {/* お問い合わせ */}
        <Section id="contact" label="CONTACT" title="お問い合わせ">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* お問い合わせフォーム */}
            <div className="bg-white/70 p-6 lg:p-8 rounded-2xl border border-slate-200/70 shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
              <h3 className="mt-0 mb-6 text-xl font-semibold text-slate-800">お問い合わせフォーム</h3>
              <form
                className="flex flex-col gap-4"
                action="mailto:info@akk-hokkaido.com"
                method="post"
                encType="text/plain"
              >
                <label className="flex flex-col font-semibold text-slate-700 gap-2">
                  お名前 <span className="text-red-500 text-sm">*</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="山田 太郎"
                    required
                    className="rounded-xl border border-slate-300 p-3 font-normal bg-white text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                  />
                </label>
                <label className="flex flex-col font-semibold text-slate-700 gap-2">
                  会社名
                  <input
                    type="text"
                    name="company"
                    placeholder="〇〇株式会社"
                    className="rounded-xl border border-slate-300 p-3 font-normal bg-white text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                  />
                </label>
                <label className="flex flex-col font-semibold text-slate-700 gap-2">
                  メールアドレス <span className="text-red-500 text-sm">*</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="info@example.com"
                    required
                    className="rounded-xl border border-slate-300 p-3 font-normal bg-white text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                  />
                </label>
                <label className="flex flex-col font-semibold text-slate-700 gap-2">
                  お問い合わせ内容
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="ご用件をご記入ください"
                    className="rounded-xl border border-slate-300 p-3 font-normal bg-white text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors resize-y"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_8px_20px_rgba(59,130,246,0.25)] transition-all hover:shadow-[0_12px_30px_rgba(59,130,246,0.35)] hover:-translate-y-1"
                >
                  送信する
                </button>
              </form>
            </div>

            {/* 連絡先情報 */}
            <div className="bg-white/70 p-6 lg:p-8 rounded-2xl border border-slate-200/70 shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
              <h3 className="mt-0 mb-6 text-xl font-semibold text-slate-800">連絡先情報</h3>
              <div className="space-y-4 text-sm lg:text-base">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="m-0 font-semibold text-slate-700 mb-1">電話</p>
                    <p className="m-0 text-slate-800">080-3265-8361</p>
                    <p className="m-0 text-slate-600 text-sm">平日 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="m-0 font-semibold text-slate-700 mb-1">メール</p>
                    <p className="m-0">
                      <a href="mailto:info@akk-hokkaido.com" className="text-blue-600 hover:text-blue-700 transition-colors underline">
                        info@akk-hokkaido.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="m-0 font-semibold text-slate-700 mb-1">所在地</p>
                    <p className="m-0 text-slate-800 leading-relaxed">
                      〒064-0808<br />
                      北海道札幌市中央区<br />
                      南8条西13丁目4-7-405
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <p className="m-0 font-semibold text-slate-700 mb-1">担当者</p>
                    <p className="m-0 text-slate-800">代表　山木 明洋</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
