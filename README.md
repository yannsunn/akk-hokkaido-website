# 合同会社AKK - 公式ウェブサイト

北海道の良質な一次産品・加工品を国内外へ届ける合同会社AKKの公式サイト

## 🚀 技術スタック

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## 📋 機能

- ✅ レスポンシブデザイン（デスクトップ・モバイル対応）
- ✅ SEO最適化（メタデータ、構造化データ）
- ✅ 高速パフォーマンス
- ✅ アクセシビリティ対応
- ✅ モダンなUI/UX

## 🔧 開発環境セットアップ

### 必要な環境

- Node.js 18.17以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

### ビルド

```bash
# 本番環境用にビルド
npm run build

# ビルドしたアプリケーションを起動
npm start
```

## 📂 プロジェクト構造

```
akk-nextjs/
├── app/                # Next.js App Router
│   ├── layout.tsx      # ルートレイアウト（メタデータ、構造化データ）
│   ├── page.tsx        # ホームページ
│   └── globals.css     # グローバルスタイル
├── components/         # 再利用可能なReactコンポーネント
│   ├── Hero.tsx        # ヒーローセクション
│   ├── Section.tsx     # セクションコンポーネント
│   ├── Card.tsx        # カードコンポーネント
│   └── Footer.tsx      # フッター
├── lib/                # ユーティリティ関数
│   └── structured-data.ts # SEO構造化データ
└── public/             # 静的ファイル
    ├── docs/           # PDFファイル
    └── images/         # 画像ファイル
```

## 🌐 デプロイ

このプロジェクトはVercelでのデプロイに最適化されています。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/akk-nextjs)

### Vercelでのデプロイ手順

1. GitHubリポジトリと連携
2. プロジェクトをインポート
3. 環境変数の設定（必要に応じて）
4. デプロイ

## 📝 カスタマイズ

### カラーパレット

グローバルカラーは `app/globals.css` で定義されています：

```css
:root {
  --bg: #f5f6fb;
  --navy: #0c2140;
  --gold: #c99a2e;
  /* ... */
}
```

### メタデータ

SEOメタデータは `app/layout.tsx` で設定されています。

### 構造化データ

Google検索用の構造化データは `lib/structured-data.ts` で管理されています。

## 📄 ライセンス

© 2025 合同会社AKK All Rights Reserved.

## 📧 お問い合わせ

- **電話**: 080-3265-8361
- **メール**: info@akk-hokkaido.com
- **所在地**: 〒064-0808 北海道札幌市中央区南8条西13丁目4-7-405

---

**開発者向け注意事項**

- PDFファイルは `public/docs/` ディレクトリに配置してください
- 画像は `public/images/` に配置してください
- コンポーネントはできるだけ再利用可能に設計されています
- Tailwind CSSのユーティリティクラスを活用してください
