# Scott's Music Collection 💽

Scott's Music Collection 是我製作的一個網站，用來從我自己在 Discogs 的專輯收藏中抓取資料並呈現。</br>
這個網站讓我可以輕鬆地查看和搜尋我個人的音樂收藏，並且提供了精美的專輯封面和詳細資訊。

你可以在這裡查看已部署的網站：[Scott's Music Collection 💽](https://scottchiu-discogs-collection.vercel.app/)

## 功能介紹

- **排序功能**：
- **按鈕**：預設圖案為向上的箭頭，表示專輯列表以升冪排序。點擊按鈕後，箭頭會變為向下，並將專輯列表排序改為降冪。
- **選單**：使用者可以從下拉選單中選擇依照 Artist、Album、Year Released 來排列專輯。預設為依照 Artist 排列。
- **搜尋欄位**：使用者可以在輸入欄位中輸入關鍵字（如演出者、專輯名稱、發行年份等），即時篩選並顯示相關專輯。
- **專輯展示**：網站下方顯示專輯封面，並在圖片下方顯示專輯名稱、演出者、發行年份等資訊。

## 使用技術

- **前端框架**：React.js、Next.js
- **語言**：HTML、JavaScript
- **樣式**：Tailwind CSS
- **部署**：Vercel

## 專案目的與靈感

此專案是為了解決我作為音樂狂熱份子的需求，將自己在 Discogs 的專輯收藏以更美觀的方式呈現出來。我平時非常喜歡收集各式專輯，Discogs 是我常用的網站，因此想利用 Discogs 提供的 API 將我的收藏整理和展示出來。此專案不僅讓我可以細細品味專輯封面，還能隨時查詢我目前收藏了哪些專輯。

## 遇到的挑戰

在實作過程中，對於 Discogs API 的使用是最大的挑戰。專輯可能有多個版本（如 CD、黑膠、卡帶等），每個版本的發行年份不一致，有些版本甚至未列上發行年份，這些因素使得音樂資訊可能不完全正確。（畢竟 Discogs 算是個 Open Source 網站）

## 未來發展

- **增添詳細專輯頁面**：目前網站僅展示專輯圖片和基本資訊，未來計劃增加點擊專輯後可以導航至該專輯的詳細頁面，提供完整曲目、音樂評論、使用者評價，甚至附上 YouTube 影音連結等功能。

## 安裝與使用

1. Clone 專案至本地：
   ```bash
   git clone https://github.com/your-username/scotts-music-collection.git
2. 安裝相關依賴套件：
   ```bash
   npm install
3. 啟動開發伺服器：
   ```bash
   npm run dev
4. 開啟瀏覽器並前往 http://localhost:3000 查看此專案。

__🙇🏻‍♂️感謝撥冗閱讀！🙏🏻__

***Copyright © Scott Chiu 2024***
