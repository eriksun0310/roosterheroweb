export const site = {
  appName: "Ninja TOEIC",
  email: "[your-email@example.com]",
  en: {
    home: "Home",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    accountDeletion: "Account Deletion",
    copyright: `© ${new Date().getFullYear()} Ninja TOEIC. All rights reserved.`,
    homeDescription: "Legal information and policies for the Ninja TOEIC app.",
    heroTitle: "Legal & Policies",
    heroDescription:
      "Review our legal documents to understand how we handle your data and what terms apply when using our app.",
  },
  zh: {
    home: "首頁",
    privacy: "隱私權政策",
    terms: "服務條款",
    accountDeletion: "帳號刪除說明",
    copyright: `© ${new Date().getFullYear()} Ninja TOEIC. 保留所有權利。`,
    homeDescription: "Ninja TOEIC App 的法務資訊與政策。",
    heroTitle: "法務文件與政策",
    heroDescription: "閱讀我們的法務文件，瞭解我們如何處理您的資料，以及使用本 App 時適用的條款。",
  },
} as const;

export type Locale = "en" | "zh";
