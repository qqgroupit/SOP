# Claude AI 專案說明文件

## 語言偏好設定

**重要：不管任何時候，Claude Code 都必須使用中文回覆。**

### 說明
- 所有對話、回覆、說明都使用繁體中文（zh-TW）
- 技術術語可保留英文，但解釋必須用中文
- 代碼註釋優先使用中文
- 文檔和README可以是雙語，但對話必須是中文

### 適用範圍
- ✅ 所有對話回覆
- ✅ 錯誤訊息說明
- ✅ 進度更新
- ✅ 問題詢問
- ✅ 總結報告

---

## 專案概述

**專案名稱**: Casino Camera SOP
**專案類型**: 靜態網站 - 標準作業程序文檔系統
**主要語言**: HTML, CSS, JavaScript
**用途**: 賭場相機設置與撲克辨識系統的標準作業程序文檔

## 專案結構

```
casino-camera-sop/
├── index.html              # 主導航頁面
├── assets/
│   ├── css/
│   │   └── styles.css      # 統一樣式
│   ├── js/
│   │   └── language.js     # 語言切換邏輯
│   └── images/             # 圖片資源
└── pages/                  # SOP 文檔頁面
    ├── recognition-camera.html
    ├── recognition-camera-xnp.html
    ├── angle-adjustment-xnp.html
    ├── poker-configuration.html
    ├── poker-calibration.html
    └── crop-parameters.html
```

## 技術架構

### 前端技術棧
- **HTML5**: 語義化標籤
- **CSS3**: Flexbox 佈局、響應式設計
- **Vanilla JavaScript**: 無框架依賴
- **Google Fonts**: Noto Sans TC 字體

### 核心功能
1. **語言切換**: localStorage 儲存語言偏好
2. **響應式設計**: 支援桌面和移動設備
3. **導航系統**: 卡片式導航設計

## 開發指南

### 檔案編輯規範

#### HTML 檔案
- 所有 HTML 檔案必須包含中英文雙語版本
- 使用 `data-lang` 屬性區分語言區塊
- 保持一致的 HTML 結構和 class 命名

#### CSS 樣式
- 統一使用 `assets/css/styles.css`
- 使用 BEM 命名規範（非強制）
- 保持響應式設計原則

#### JavaScript
- 保持簡單的 Vanilla JavaScript
- 避免引入外部框架
- 註釋關鍵邏輯

### 新增 SOP 文檔

1. 在 `pages/` 目錄創建新的 HTML 檔案
2. 複製現有頁面的結構（包含語言切換、導航等）
3. 更新 `index.html` 添加新的導航卡片
4. 確保中英文內容完整

### 安全規範

⚠️ **重要**: 本專案涉及賭場系統配置文檔

#### 必須遵守的安全規則

1. **禁止硬編碼敏感資訊**:
   - ❌ 實際密碼
   - ❌ 真實 IP 地址
   - ❌ API Token/Key

2. **使用佔位符**:
   - ✅ `[密碼]` 或 `[PASSWORD]`
   - ✅ `[相機IP]` 或 `[CAMERA_IP]`
   - ✅ `[內部IP]` 或 `[INTERNAL_IP]`

3. **Code Review 檢查清單**:
   - 🔒 安全：無硬編碼密碼/token
   - 🐛 邏輯：空值處理、邊界條件
   - ⚡ 效能：無記憶體洩漏
   - 📝 風格：命名一致性

#### 常見需遮蔽的資訊範例

```html
<!-- ❌ 錯誤 -->
rtsp://admin:Cgy888club@10.155.11.114/profile1/media.smp

<!-- ✅ 正確 -->
rtsp://admin:[密碼]@[相機IP]/profile1/media.smp
```

## Git 工作流程

### Commit Message 規範
- 使用**繁體中文**
- 格式：`<類型>: <簡短描述>`
- 類型：
  - `新增`: 新功能或新檔案
  - `修改`: 既有功能修改
  - `修復`: Bug 修復
  - `安全`: 安全性修復
  - `文檔`: 文檔更新
  - `樣式`: 程式碼格式調整

### 範例
```
新增: 實作語言切換功能
修復: 修正響應式佈局問題
安全: 移除硬編碼密碼
文檔: 更新 README.md
```

## 常見任務

### 更新 SOP 內容
1. 定位到對應的 HTML 檔案
2. 同時更新中文和英文區塊
3. 確保格式一致
4. 執行 `/git` 命令提交

### 新增圖片
1. 放置到 `assets/images/` 目錄
2. 使用相對路徑引用：`../assets/images/xxx.png`
3. 提供替代文字 (alt)

### 樣式調整
1. 編輯 `assets/css/styles.css`
2. 測試響應式效果
3. 確保所有頁面一致性

## Claude Code 命令

### `/git` - Git 提交流程
自動執行完整的 Git 提交流程：
1. 分析變更內容
2. 執行 Code Review（含安全檢查）
3. 更新文檔（README.md, CLAUDE.md, CHANGELOG.md）
4. 建立 commit 並推送

## 專案維護

### 定期檢查
- 檢查連結是否有效
- 更新過時的配置資訊
- 測試語言切換功能
- 驗證響應式設計

### 文檔更新
- 有新 SOP 時更新 `index.html`
- 重大變更時更新 `README.md`
- 每次變更都更新 `CHANGELOG.md`

## 注意事項

1. **本專案為純靜態網站**，無後端邏輯
2. **無需部署流程**，可直接開啟 HTML 檔案
3. **保持簡單**，避免過度工程化
4. **安全第一**，所有提交前必須通過安全檢查

## 聯絡資訊

如有問題或建議，請透過 Git commit 或 issue 回報。

---

**最後更新**: 2026-01-21
