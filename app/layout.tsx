import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from "@/lib/structured-data";

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: "合同会社AKK | 北海道発の小売・輸出入事業",
  description: "北海道の良質な一次産品・加工品を国内外へ届ける合同会社AKKの公式サイト。銀行・公庫への提出を想定した会社概要・事業計画・実績情報を掲載しています。",
  keywords: ["合同会社AKK", "北海道", "輸出入", "小売", "EC", "札幌", "北海道産品"],
  authors: [{ name: "合同会社AKK" }],
  openGraph: {
    title: "合同会社AKK | 北海道発の小売・輸出入事業",
    description: "北海道の良質な一次産品・加工品を国内外へ届ける合同会社AKKの公式サイト",
    url: "https://akk-hokkaido.com",
    siteName: "合同会社AKK",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
