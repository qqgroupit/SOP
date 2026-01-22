# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- 初始化專案結構
- 新增主導航頁面 (index.html)
- 新增 6 個 SOP 文檔頁面：
  - 辨識相機設定 SOP (recognition-camera.html)
  - XNP辨識相機設定 SOP (recognition-camera-xnp.html)
  - XNP相機角度調整 SOP (angle-adjustment-xnp.html)
  - 撲克配置 SOP (poker-configuration.html)
  - 撲克辨識校準 SOP (poker-calibration.html)
  - 裁剪參數 SOP (crop-parameters.html)
- 實作中英文雙語切換功能
- 統一的 CSS 樣式系統
- 響應式網頁設計
- Claude Code 自動化命令：Git 提交流程 (.claude/commands/git.md)

### Security
- 移除所有硬編碼的密碼和敏感資訊
- 使用佔位符替代實際的 RTSP 認證資訊
- 遮蔽內部 IP 地址，使用 [相機IP] 佔位符

### Changed
- 無

### Deprecated
- 無

### Removed
- 無

### Fixed
- 無
