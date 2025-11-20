const baseUrl = "https://akk-hokkaido.com";
const logoUrl = `${baseUrl}/logo.svg`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "合同会社AKK",
  "alternateName": "AKK LLC",
  "url": baseUrl,
  "logo": logoUrl,
  "description": "北海道の良質な一次産品と加工品を国内外へ届ける合同会社AKK。小売・輸出入・商品の企画開発を通じて、生産者と生活者をつなぐ事業を展開しています。",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "南8条西13丁目4-7-405",
    "addressLocality": "札幌市中央区",
    "addressRegion": "北海道",
    "postalCode": "064-0808",
    "addressCountry": "JP"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+81-80-3265-8361",
    "contactType": "customer service",
    "areaServed": "JP",
    "availableLanguage": ["ja", "en", "zh"]
  },
  "founder": {
    "@type": "Person",
    "name": "山木 明潔"
  },
  "foundingDate": "2019-04-01",
  "email": "info@akk-hokkaido.com",
  "sameAs": []
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "合同会社AKK",
  "image": logoUrl,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "南8条西13丁目4-7-405",
    "addressLocality": "札幌市中央区",
    "addressRegion": "北海道",
    "postalCode": "064-0808",
    "addressCountry": "JP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.0481,
    "longitude": 141.3357
  },
  "telephone": "+81-80-3265-8361",
  "email": "info@akk-hokkaido.com",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ホーム",
      "item": baseUrl
    }
  ]
};
