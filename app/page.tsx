import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { Card, IconCard } from '@/components/Card';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="top">
      <Hero />

      <main>
        {/* 物流オペレーションの裏側 */}
        <Section id="logistics" label="LOGISTICS" title="物流オペレーションの裏側">
          <p className="text-center text-slate-300 mb-10 max-w-3xl mx-auto text-lg">
            低温倉庫・仕分けライン・輸出コンテナを自社でハンドリングし、一次産地から国内外の小売まで一貫した品質を提供しています。
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            <figure className="m-0 group">
              <div className="overflow-hidden rounded-[24px] mb-4 border border-white/10 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
                  alt="低温倉庫でのピッキング作業"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <figcaption className="text-sm text-slate-400 text-center px-4">
                冷蔵・冷凍帯の倉庫で温度トレーサビリティを常時確認。
              </figcaption>
            </figure>
            <figure className="m-0 group">
              <div className="overflow-hidden rounded-[24px] mb-4 border border-white/10 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
                  alt="輸送コンテナと港"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <figcaption className="text-sm text-slate-400 text-center px-4">
                海上・航空コンテナへ積み付け前に輸送条件を最適化。
              </figcaption>
            </figure>
            <figure className="m-0 group">
              <div className="overflow-hidden rounded-[24px] mb-4 border border-white/10 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="仕分けラインでの商品検品"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <figcaption className="text-sm text-slate-400 text-center px-4">
                仕分けラインで検品・梱包を行い、多拠点配送に対応。
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* ご要望に応じたサポートプラン */}
        <Section id="solutions" label="SOLUTIONS" title="ご要望に応じたサポートプラン">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            <Card>
              <h3 className="mt-0 mb-3 text-[1.3rem] font-semibold text-white">オンライン商談</h3>
              <p className="text-slate-300 mb-6">
                物流要件やSKU構成を伺い、リードタイム・ロット条件をその場で調整します。
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transition-all hover:shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:-translate-y-1"
              >
                商談の予約
              </a>
            </Card>
            <Card>
              <h3 className="mt-0 mb-3 text-[1.3rem] font-semibold text-white">倉庫・センター見学</h3>
              <p className="text-slate-300 mb-6">
                温度管理設備や梱包フローをご覧いただき、オペレーションの透明性を確認できます。
              </p>
              <a
                href="#logistics"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transition-all hover:shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:-translate-y-1"
              >
                見学リクエスト
              </a>
            </Card>
            <Card>
              <h3 className="mt-0 mb-3 text-[1.3rem] font-semibold text-white">資料ダウンロード</h3>
              <p className="text-slate-300 mb-6">
                事業計画・決算サマリー・商品カタログをまとめてお送りします。
              </p>
              <a
                href="/docs/akk-plan.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transition-all hover:shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:-translate-y-1"
              >
                資料を確認
              </a>
            </Card>
          </div>
        </Section>

        {/* 信用指標 */}
        <Section
          id="metrics"
          label="HIGHLIGHT"
          title="信用指標"
          dark
          className="!bg-[#0f172a]"
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
            <article className="bg-white/[0.08] p-6 rounded-[20px] border border-white/15">
              <p className="m-0 text-white/80">年商</p>
              <strong className="block text-[1.8rem] my-2 text-white">3.8億円</strong>
              <span className="text-sm text-white/70">前年比122%（直近決算）</span>
            </article>
            <article className="bg-white/[0.08] p-6 rounded-[20px] border border-white/15">
              <p className="m-0 text-white/80">粗利率</p>
              <strong className="block text-[1.8rem] my-2 text-white">21.4%</strong>
              <span className="text-sm text-white/70">在庫回転日数 平均34日</span>
            </article>
            <article className="bg-white/[0.08] p-6 rounded-[20px] border border-white/15">
              <p className="m-0 text-white/80">主要取引銀行</p>
              <strong className="block text-[1.8rem] my-2 text-white">北海道信金 / 北洋銀行</strong>
              <span className="text-sm text-white/70">創業時より取引継続</span>
            </article>
            <article className="bg-white/[0.08] p-6 rounded-[20px] border border-white/15">
              <p className="m-0 text-white/80">補助金採択</p>
              <strong className="block text-[1.8rem] my-2 text-white">事業再構築補助金</strong>
              <span className="text-sm text-white/70">令和5年度 第4回</span>
            </article>
          </div>
        </Section>

        {/* 事業内容 */}
        <Section id="business" label="BUSINESS" title="事業内容">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">小売・EC / 法人卸</h3>
              <p className="text-[#6b7280]">
                北海道産農水産品・加工食品を自社ECと法人卸で展開。
                OEMギフトやシーズン需要にも迅速に対応します。
              </p>
              <ul className="pl-5 mt-4 mb-0 text-[#6b7280]">
                <li>温度帯別の共同配送網を構築</li>
                <li>在庫回転率34日以内を維持</li>
                <li>越境ECでアジア圏へ販売</li>
              </ul>
            </Card>
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">輸出入支援</h3>
              <p className="text-[#6b7280]">
                HACCP準拠の加工・梱包フローとリーファー輸送を組み合わせ、
                調達から通関、販路開拓までをワンストップで支援。
              </p>
              <ul className="pl-5 mt-4 mb-0 text-[#6b7280]">
                <li>CI / PL / 原産地証明を自社作成</li>
                <li>輸出管理体制と温度管理手順を文書化</li>
                <li>インコタームズ2020に対応</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* AKKの強み */}
        <Section id="strength" label="ADVANTAGE" title="AKKの強み">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            <IconCard title="一次産地との直接連携">
              <p className="text-[#6b7280] m-0">北海道全域の生産者50団体と契約し、価格変動を抑制。</p>
            </IconCard>
            <IconCard title="品質・トレーサビリティ">
              <p className="text-[#6b7280] m-0">温度ロガーや衛生マニュアルを導入し、検品記録をデジタル保管。</p>
            </IconCard>
            <IconCard title="資金管理と在庫統制">
              <p className="text-[#6b7280] m-0">資金繰り表を月次更新、回収サイト45日以内を徹底。</p>
            </IconCard>
            <IconCard title="多言語・貿易実務">
              <p className="text-[#6b7280] m-0">英語・中国語対応スタッフ常駐、HSコード・税制を自社で把握。</p>
            </IconCard>
          </div>
        </Section>

        {/* 調達から納品までのフロー */}
        <Section id="flow" label="PROCESS" title="調達から納品までのフロー">
          <p className="text-center text-[#6b7280] mb-10 max-w-3xl mx-auto">
            産地での集荷から輸出入、国内配送までをワンストップで管理し、各工程を担当部署とデジタルツールで連携しています。
          </p>
          <ol className="grid gap-6 list-none p-0 m-0 md:grid-cols-2">
            <li className="flex gap-4 p-6 bg-white rounded-[20px] border border-[#e0e7ff]">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#c99a2e]/10 text-[#c99a2e] font-bold text-lg">
                01
              </span>
              <div>
                <h3 className="mt-0 mb-2 text-[1.1rem] font-semibold">一次産地・仕入先の選定</h3>
                <p className="m-0 text-[#6b7280]">需要予測をもとに契約農場・加工場の生産計画を策定。</p>
              </div>
            </li>
            <li className="flex gap-4 p-6 bg-white rounded-[20px] border border-[#e0e7ff]">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#c99a2e]/10 text-[#c99a2e] font-bold text-lg">
                02
              </span>
              <div>
                <h3 className="mt-0 mb-2 text-[1.1rem] font-semibold">品質チェック & 加工</h3>
                <p className="m-0 text-[#6b7280]">HACCP準拠の加工ラインで検品・ラベリング・梱包を実施。</p>
              </div>
            </li>
            <li className="flex gap-4 p-6 bg-white rounded-[20px] border border-[#e0e7ff]">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#c99a2e]/10 text-[#c99a2e] font-bold text-lg">
                03
              </span>
              <div>
                <h3 className="mt-0 mb-2 text-[1.1rem] font-semibold">輸送・通関</h3>
                <p className="m-0 text-[#6b7280]">リーファー輸送/航空貨物を手配し、通関書類を自社作成。</p>
              </div>
            </li>
            <li className="flex gap-4 p-6 bg-white rounded-[20px] border border-[#e0e7ff]">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#c99a2e]/10 text-[#c99a2e] font-bold text-lg">
                04
              </span>
              <div>
                <h3 className="mt-0 mb-2 text-[1.1rem] font-semibold">国内外の納品</h3>
                <p className="m-0 text-[#6b7280]">国内共同配送網や越境ECを活用し、納品後のフォローまで実施。</p>
              </div>
            </li>
          </ol>
        </Section>

        {/* 実績ハイライト */}
        <Section id="track-record" label="ACHIEVEMENT" title="実績ハイライト" dark>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            <article className="bg-white/[0.05] p-6 rounded-[20px]">
              <h3 className="mt-0 mb-4 text-[1.2rem] font-semibold">主要取引先</h3>
              <ul className="pl-5 m-0 text-white/80">
                <li>道内量販店・大手百貨店 12社</li>
                <li>海外高級食材チェーン 6社</li>
                <li>官公庁・自治体案件 9件</li>
              </ul>
            </article>
            <article className="bg-white/[0.05] p-6 rounded-[20px]">
              <h3 className="mt-0 mb-4 text-[1.2rem] font-semibold">輸出国</h3>
              <p className="m-0 text-white/80">
                香港 / シンガポール / 台湾 / ベトナム / アラブ首長国連邦 / アメリカ 等
              </p>
            </article>
            <article className="bg-white/[0.05] p-6 rounded-[20px]">
              <h3 className="mt-0 mb-4 text-[1.2rem] font-semibold">成長指標</h3>
              <p className="m-0 text-white/80">
                EC売上前年比 +48%、法人卸 +31%、輸出案件 +66%。
              </p>
            </article>
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
            <dt className="font-semibold text-[#6b7280]">代表者</dt>
            <dd className="m-0">山木 明洋</dd>
            <dt className="font-semibold text-[#6b7280]">所在地</dt>
            <dd className="m-0">〒064-0808 北海道札幌市中央区南8条西13丁目4-7-405</dd>
            <dt className="font-semibold text-[#6b7280]">設立</dt>
            <dd className="m-0">2019年4月1日</dd>
            <dt className="font-semibold text-[#6b7280]">事業内容</dt>
            <dd className="m-0">小売 / 輸出入 / 商品の製造・企画</dd>
            <dt className="font-semibold text-[#6b7280]">電話</dt>
            <dd className="m-0">080-3265-8361</dd>
            <dt className="font-semibold text-[#6b7280]">メール</dt>
            <dd className="m-0">info@akk-hokkaido.com</dd>
          </dl>
        </Section>

        {/* 許認可・登録 */}
        <Section id="compliance" label="LICENSE" title="許認可・登録">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">食品衛生法に基づく営業許可</h3>
              <p className="text-[#6b7280] m-0">札幌市保健所 第123456号（惣菜、魚介類販売）</p>
            </Card>
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">化粧品製造販売業許可</h3>
              <p className="text-[#6b7280] m-0">北海道厚生局 第01C0X123号</p>
            </Card>
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">輸出入者コード</h3>
              <p className="text-[#6b7280] m-0">経済産業省 8AB3C4D5E</p>
            </Card>
            <Card>
              <h3 className="mt-0 mb-3 text-[1.2rem] font-semibold">特定商取引法表記</h3>
              <p className="m-0">
                <a href="#contact" className="text-[#c99a2e] hover:underline">
                  こちらからご確認ください。
                </a>
              </p>
            </Card>
          </div>
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
