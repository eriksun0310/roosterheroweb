export const LAST_UPDATED = "2026-07-21";

export const accountDeletion = {
  title: "帳號刪除說明",
  lastUpdated: `最後更新日期：${LAST_UPDATED}`,
  sections: [
    {
      heading: "如何刪除您的帳號",
      body: `如果您希望刪除您的公雞超人帳號及所有相關資料，可以透過以下方式進行：

**方法一：App 內刪除**
1. 開啟公雞超人 App
2. 前往**設定** > **帳號**
3. 點選**刪除帳號**
4. 確認您的決定

**方法二：電子郵件請求**
發送電子郵件至 **connect.ptalk@gmail.com**，主旨為「帳號刪除請求」，並附上與您帳號關聯的電子郵件地址。`,
    },
    {
      heading: "刪除帳號後會發生什麼",
      body: `當您請求刪除帳號時：

- 您的帳號資料和個人資訊將被永久刪除
- 您的使用進度和歷史紀錄將被移除
- 任何有效的訂閱應透過 Google Play 商店或 Apple App Store 另行取消
- 無法與您身分關聯的匿名分析資料可能會被保留

請注意，帳號刪除是**不可逆的**。帳號刪除後，您的資料將無法恢復。`,
    },
    {
      heading: "處理時間",
      body: `帳號刪除請求通常會在 **30 天**內處理完成。帳號成功刪除後，您將收到確認電子郵件。`,
    },
    {
      heading: "聯絡我們",
      body: `如果您對帳號刪除有任何問題，請透過以下方式聯繫我們：

**電子郵件**：connect.ptalk@gmail.com
**Threads**：@ptalk.design`,
    },
  ],
} as const;
