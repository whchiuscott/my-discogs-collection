# Scott's Music Collection💽

「Scott's Music Collection💽」是我製作的一個網站，用來從我自己在 Discogs 的專輯收藏中抓取資料並呈現。</br>
這個網站讓我可以輕鬆地查看和搜尋我個人的音樂收藏，並且提供了精美的專輯封面和詳細資訊。

_Scott's Music Collection💽_ is a website I created to fetch and display data from my personal album collection on Discogs.</br>
This website allows me to easily view and search my music collection, providing beautiful album covers and detailed information.

你可以在這裡查看已部署的網站
You can check out the live site here: [Scott's Music Collection 💽](https://scottchiu-discogs-collection.vercel.app/)

## 目錄

- [中文](#中文介紹)
- [English](#english-description)

## 中文介紹

### 功能介紹

- **按鈕**：預設圖案為向上的箭頭，表示專輯列表以升冪排序。點擊按鈕後，箭頭會變為向下，並將專輯列表排序改為降冪。
- **選單**：使用者可以從下拉選單中選擇依照 Artist、Album、Year Released 來排列專輯。預設為依照 Artist 排列。
- **搜尋欄位**：使用者可以在輸入欄位中輸入關鍵字（如演出者、專輯名稱、發行年份等），即時篩選並顯示相關專輯。
- **專輯展示**：網站下方顯示專輯封面，並在圖片下方顯示專輯名稱、演出者、發行年份等資訊。

### 使用技術

- **前端框架**：React.js、Next.js
- **語言**：HTML、JavaScript
- **樣式**：Tailwind CSS
- **部署**：Vercel

### 專案目的與靈感

此專案是為了解決我作為音樂狂熱份子的需求，將自己在 Discogs 的專輯收藏以更美觀的方式呈現出來。我平時非常喜歡收集各式專輯，Discogs 是我常用的網站，因此想利用 Discogs 提供的 API 將我的收藏整理和展示出來。此專案不僅讓我可以細細品味專輯封面，還能隨時查詢我目前收藏了哪些專輯。

### 遇到的挑戰

在實作過程中，對於 Discogs API 的使用是最大的挑戰。專輯可能有多個版本（如 CD、黑膠、卡帶等），每個版本的發行年份不一致，有些版本甚至未列上發行年份，這些因素使得音樂資訊可能不完全正確。（畢竟 Discogs 這個網站是由使用者貢獻且維護的，難免會有部分資訊不全）

### 未來發展

- **增添詳細專輯頁面**：目前網站僅展示專輯圖片和基本資訊，未來計劃增加點擊專輯後可以導航至該專輯的詳細頁面，提供完整曲目、音樂評論、使用者評價，甚至附上 YouTube 影音連結等功能。

### 安裝與使用

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

## English Description

### Features

- **Button**: Initially shows an upward arrow, indicating that the album list is sorted in ascending order. Clicking the button will change the arrow to a downward direction, and the album list will be sorted in descending order.
- **Dropdown Menu**: Users can select from a dropdown menu to sort albums by Artist, Album, or Year Released. The default sorting is by Artist.
- **Search Field**: Users can enter keywords (such as artist, album title, release year, etc.) into the search field to instantly filter and display relevant albums.
- **Album Display**: The site displays album covers at the bottom, with album name, artist, release year, and other details below the images.

### Technologies Used

- **Frontend Framework**: React.js, Next.js
- **Languages**: HTML, JavaScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

### Project Purpose and Inspiration

This project was created to address my needs as a music enthusiast by presenting my Discogs album collection in a more visually appealing way. As someone who enjoys collecting various albums and frequently uses Discogs, I wanted to utilize the Discogs API to organize and showcase my collection. This project not only allows me to appreciate album covers but also to keep track of which albums I currently own.

### Challenges Encountered

One of the major challenges during development was working with the Discogs API. Albums can have multiple versions (e.g., CD, vinyl, cassette), each with potentially different release years. Some versions may even lack a release year, which means the music information may not always be complete or accurate. (Discogs is a user-contributed site, so some information may be missing or incorrect.)

### Future Developments

- **Detailed Album Pages**: Currently, the site only displays album images and basic information. Future plans include adding functionality to navigate to detailed pages for each album, which would provide complete track listings, music reviews, user ratings, and even YouTube video links.

### Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/scotts-music-collection.git
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
4. Open your browser and go to http://localhost:3000 to view the project.

__🙇🏻‍♂️ Thank you for taking the time to read! 🙏🏻__




***Copyright © Scott Chiu 2024***
