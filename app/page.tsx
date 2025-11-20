import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { Card, IconCard } from '@/components/Card';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="top">
      <Hero />

      <main>

        {/* 事業内容 */}
        <Section id="business" label="BUSINESS" title="事業内容">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">小売</h3>
              <p className="text-[#6b7280]">
                北海道産品を中心とした商品の小売販売を行っています。
              </p>
            </Card>
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">輸出入</h3>
              <p className="text-[#6b7280]">
                国内外の商品の輸出入業務を行っています。
              </p>
            </Card>
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">商品の製造・企画</h3>
              <p className="text-[#6b7280]">
                商品の企画・開発を行っています。
              </p>
            </Card>
          </div>
        </Section>

        {/* 代表メッセージ */}
        <Section id="message" label="MESSAGE" title="代表メッセージ">
          <div className="text-[1rem] text-[#6b7280]">
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
            <p>
              今後とも、合同会社AKKにご愛顧とご支援を賜りますよう、心よりお願い申し上げます。
            </p>
            <p className="mt-8 font-semibold text-[#1f2a37]">代表　山木 明洋</p>
          </div>
        </Section>

        {/* 会社概要 */}
        <Section id="company" label="COMPANY" title="会社概要">
          <dl className="grid grid-cols-[minmax(140px,1fr)_2fr] gap-4 m-0 max-md:grid-cols-1">
            <dt className="font-semibold text-[#6b7280]">会社名</dt>
            <dd className="m-0">合同会社AKK</dd>
            <dt className="font-semibold text-[#6b7280]">運営統括責任者</dt>
            <dd className="m-0">山木 明洋</dd>
            <dt className="font-semibold text-[#6b7280]">所在地</dt>
            <dd className="m-0">〒064-0808 北海道札幌市中央区南8条西13丁目4-7-405</dd>
            <dt className="font-semibold text-[#6b7280]">電話番号</dt>
            <dd className="m-0">080-3265-8361</dd>
            <dt className="font-semibold text-[#6b7280]">メールアドレス</dt>
            <dd className="m-0">info@akk-hokkaido.com</dd>
            <dt className="font-semibold text-[#6b7280]">ウェブサイト</dt>
            <dd className="m-0">https://akk-hokkaido.com/</dd>
          </dl>
        </Section>

        {/* お問い合わせ */}
        <Section id="contact" label="CONTACT" title="お問い合わせ / 資料請求">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            <form className="flex flex-col gap-4" action="https://example.com/form" method="post">
              <label className="flex flex-col font-semibold gap-1.5">
                お名前
                <input
                  type="text"
                  name="name"
                  placeholder="山田 太郎"
                  required
                  className="rounded-xl border border-[#e0e7ff] p-3 font-normal bg-white"
                />
              </label>
              <label className="flex flex-col font-semibold gap-1.5">
                会社名
                <input
                  type="text"
                  name="company"
                  placeholder="〇〇株式会社"
                  className="rounded-xl border border-[#e0e7ff] p-3 font-normal bg-white"
                />
              </label>
              <label className="flex flex-col font-semibold gap-1.5">
                メールアドレス
                <input
                  type="email"
                  name="email"
                  placeholder="info@example.com"
                  required
                  className="rounded-xl border border-[#e0e7ff] p-3 font-normal bg-white"
                />
              </label>
              <label className="flex flex-col font-semibold gap-1.5">
                お問い合わせ種別
                <select
                  name="type"
                  className="rounded-xl border border-[#e0e7ff] p-3 font-normal bg-white"
                >
                  <option value="finance">金融機関からのお問い合わせ</option>
                  <option value="partner">取引・パートナー</option>
                  <option value="general">その他</option>
                </select>
              </label>
              <label className="flex flex-col font-semibold gap-1.5">
                内容
                <textarea
                  name="message"
                  rows={4}
                  placeholder="ご用件をご記入ください"
                  className="rounded-xl border border-[#e0e7ff] p-3 font-normal bg-white resize-y"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-[#c99a2e] text-[#0c2140] shadow-[0_15px_35px_rgba(201,154,46,0.25)] transition-transform hover:-translate-y-0.5"
              >
                送信する
              </button>
            </form>

            <div className="p-8 border border-[#e0e7ff] rounded-[24px] bg-[#fdfdfd]">
              <p className="m-0 mb-3 text-[#1f2a37]">
                <strong>電話：</strong> 080-3265-8361（平日9:00-18:00）
              </p>
              <p className="m-0 mb-3 text-[#1f2a37]">
                <strong>メール：</strong> info@akk-hokkaido.com
              </p>
              <p className="m-0 mb-3 text-[#1f2a37]">
                <strong>所在地：</strong> 〒064-0808 北海道札幌市中央区南8条西13丁目4-7-405
              </p>
              <p className="m-0 mb-4 text-[#1f2a37]">
                <strong>担当：</strong> 代表 山木 明洋
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="/docs/akk-company-profile.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold bg-white text-[#0c2140] border border-[#0c2140]/10 transition-transform hover:-translate-y-0.5"
                >
                  会社案内PDF
                </a>
                <a
                  href="/docs/akk-financial-summary.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold bg-white text-[#0c2140] border border-[#0c2140]/10 transition-transform hover:-translate-y-0.5"
                >
                  決算サマリー
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
