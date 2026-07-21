export const LAST_UPDATED = "2026-07-21";

export const privacy = {
  en: {
    title: "Privacy Policy",
    lastUpdated: `Last Updated: ${LAST_UPDATED}`,
    sections: [
      {
        heading: "Introduction",
        body: `This Privacy Policy describes how Ninja TOEIC ("we", "us", or "our") handles information when you use our mobile application ("App"). We are committed to protecting your privacy and being transparent about our data practices.`,
      },
      {
        heading: "Information We Collect",
        body: `We collect the following types of information:

- **Anonymous Usage Analytics**: We collect anonymous data about how you use the App, such as features accessed, session duration, and general usage patterns. This data cannot be used to identify you personally.
- **Device Information**: We may collect general device information such as device type, operating system version, and app version for compatibility and performance optimization.
- **We Do NOT Collect Personal Information**: We do not collect your name, email address, phone number, location, photos, or any other personally identifiable information.`,
      },
      {
        heading: "How We Use Information",
        body: `The anonymous information we collect is used to:

- Improve the App's features and user experience
- Fix bugs and optimize performance
- Understand general usage trends
- Ensure compatibility across devices`,
      },
      {
        heading: "Third-Party Services",
        body: `Our App uses the following third-party services that may collect information:

- **Firebase Analytics (Google)**: Used for anonymous usage analytics. Firebase Analytics may collect device identifiers and usage data. Please refer to [Google's Privacy Policy](https://policies.google.com/privacy) for more details.
- **AdMob (Google)**: Used to display advertisements. AdMob may collect device identifiers and use cookies or similar technologies to serve personalized or non-personalized ads. Please refer to [Google's Advertising Privacy Policy](https://policies.google.com/technologies/ads) for more details.

These third-party services have their own privacy policies, and we encourage you to review them.`,
      },
      {
        heading: "Data Retention and Deletion",
        body: `Anonymous analytics data is retained for a reasonable period to fulfill the purposes described in this policy. Since we do not collect personally identifiable information, there is generally no personal data to delete. If you wish to stop data collection, you may uninstall the App at any time.

If you have created an account, you may request account deletion through the App or by contacting us at the email below.`,
      },
      {
        heading: "Children's Privacy",
        body: `Our App is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information promptly.`,
      },
      {
        heading: "Changes to This Policy",
        body: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.`,
      },
      {
        heading: "Contact Us",
        body: `If you have any questions or concerns about this Privacy Policy, please contact us at:

**Email**: [your-email@example.com]`,
      },
    ],
  },
  zh: {
    title: "隱私權政策",
    lastUpdated: `最後更新日期：${LAST_UPDATED}`,
    sections: [
      {
        heading: "簡介",
        body: `本隱私權政策說明 Ninja TOEIC（以下稱「我們」）在您使用我們的行動應用程式（以下稱「本 App」）時如何處理資訊。我們致力於保護您的隱私，並對我們的資料處理方式保持透明。`,
      },
      {
        heading: "我們收集的資訊",
        body: `我們收集以下類型的資訊：

- **匿名使用分析**：我們收集關於您如何使用本 App 的匿名資料，例如存取的功能、使用時長及一般使用模式。此資料無法用於識別您的個人身分。
- **裝置資訊**：我們可能收集一般裝置資訊，例如裝置類型、作業系統版本及 App 版本，以利相容性及效能最佳化。
- **我們不收集個人資訊**：我們不會收集您的姓名、電子郵件地址、電話號碼、位置、照片或任何其他可識別個人身分的資訊。`,
      },
      {
        heading: "資訊使用方式",
        body: `我們收集的匿名資訊用於：

- 改善 App 的功能與使用者體驗
- 修正錯誤並最佳化效能
- 瞭解一般使用趨勢
- 確保跨裝置的相容性`,
      },
      {
        heading: "第三方服務",
        body: `本 App 使用以下第三方服務，這些服務可能會收集資訊：

- **Firebase Analytics（Google）**：用於匿名使用分析。Firebase Analytics 可能收集裝置識別碼及使用資料。詳情請參閱 [Google 隱私權政策](https://policies.google.com/privacy)。
- **AdMob（Google）**：用於顯示廣告。AdMob 可能收集裝置識別碼，並使用 Cookie 或類似技術提供個人化或非個人化廣告。詳情請參閱 [Google 廣告隱私權政策](https://policies.google.com/technologies/ads)。

這些第三方服務有各自的隱私權政策，我們建議您詳細閱讀。`,
      },
      {
        heading: "資料保存與刪除",
        body: `匿名分析資料會保留合理的期間，以達成本政策所述之目的。由於我們不收集可識別個人身分的資訊，通常沒有個人資料需要刪除。如果您希望停止資料收集，您可以隨時解除安裝本 App。

如果您已建立帳號，您可以透過 App 內功能或聯繫下方電子郵件來請求刪除帳號。`,
      },
      {
        heading: "兒童隱私",
        body: `本 App 不針對 13 歲以下的兒童。我們不會故意向 13 歲以下的兒童收集個人資訊。如果我們發現無意中收集了 13 歲以下兒童的個人資訊，我們將立即採取措施刪除該資訊。`,
      },
      {
        heading: "政策變更",
        body: `我們可能會不時更新本隱私權政策。我們會在 App 內發布新版隱私權政策並更新本頁頂部的「最後更新日期」來通知您任何變更。建議您定期查閱本隱私權政策以瞭解任何更新。`,
      },
      {
        heading: "聯絡我們",
        body: `如果您對本隱私權政策有任何問題或疑慮，請透過以下方式聯繫我們：

**電子郵件**：[your-email@example.com]`,
      },
    ],
  },
} as const;
