---
title: 遊戲技巧
description: 建築、裝飾、站內工具和外部資源
order: 30
icon: Zap
---

## 電梯系統

伺服器支援以鐵塊搭建的垂直電梯。將鐵塊疊放在同一水平位置，站在上面即可觸發：

- **跳躍** - 向上傳送至下一個鐵塊
- **潛行** - 向下傳送至下一個鐵塊

注意上下兩層鐵塊需保持同一 X/Z 座標。

## 盔甲架編輯器

使用 `/asedit give` 獲取編輯器後，右鍵點擊任意盔甲架即可開啟編輯介面，支援逐部位調整旋轉角度、切換隱身、鎖定互動等選項，適合製作靜態展示擺件或場景人物。

## 常用命令

- 獲取玩家頭 `/give @s minecraft:player_head[minecraft:profile={name:"玩家ID"}]`
- 獲取發光隱形展示框 `/imageframe giveinvisibleframe glowing`
- 獲取普通隱形展示框 `/imageframe giveinvisibleframe regular`

## 建築小技巧

### 利用 Axiom 穿牆檢視建築內部

Axiom 內建穿牆（No-Clip）功能，無需切換遊戲模式即可自由穿越方塊。長按 `左 Alt` 開啟 Builder 選單，其中有穿牆開關按鈕，啟用後可從任意角度穿入建築內部檢查結構，方便排查錯誤或調整細節。

### 用告示牌和發光墨囊製作發光文字

在告示牌上寫字後，手持發光墨囊右鍵點擊告示牌，文字會變為發光描邊效果，適合製作標牌、門牌或裝飾性文字。

告示牌文字中可以靈活混入各種字元來豐富排版效果，例如用 `>` `<` 包裹文字作為指示箭頭，用 `|` 作為分隔線，用 `【】`、`『』`、`─`、`◆` 等符號作為框線或點綴，效果遠比純文字更有設計感。

### 隱藏光源

海燈籠、螢光苔蘚、發光地衣等方塊可被半磚、地毯或其他方塊遮蓋，同時不影響發光效果，適合在不暴露光源的前提下為室內補光。

### 利用展示框（隱形）做牆面細節

將展示框設為隱形後放入物品，可在不顯示邊框的情況下將物品貼附在牆面上，常用於製作掛畫、儀錶板或牆面裝飾。

### 混用半磚減少視覺重複感

大面積鋪設同種方塊容易顯得單調，在地面或屋頂混入同色系的半磚或半磚，可在不改變整體色調的前提下增加細節層次。

## 實用網站

### Minecraft Wiki

查閱方塊、物品、指令、生物等遊戲內容的權威社群資料庫。請使用正版 Wiki，[避免使用 Fandom 版本](https://zh.minecraft.wiki/w/Minecraft_Wiki:%E5%AF%B9Fandom%E7%AB%99%E7%82%B9%E7%9A%84%E5%A3%B0%E6%98%8E?variant=zh-cn)。

- [Minecraft Wiki（中文）](https://zh.minecraft.wiki)
- [Minecraft Wiki（英文）](https://minecraft.wiki)

### 錯誤追蹤

- [Mojira](https://mojira.dev/) - 查詢 Minecraft 已知錯誤的第三方前端，資料來源為 Mojang 官方錯誤追蹤系統

### 資源下載

- [Modrinth](https://modrinth.com/) - 下載 Mod、資源包、資料包、光影、整合包等內容的開源社群平臺，推薦優先使用
- [CurseForge](https://www.curseforge.com/minecraft) - 老牌內容分發平臺，資源豐富，但下載體驗較差，僅在 Modrinth 上找不到時使用

### 工具與實用網站

- [Bloxelizer Converter](https://bloxelizer.com/converter) - 線上轉換投影檔案格式，支援 `.litematic`、`.schem`、`.nbt`、`.mcstructure` 之間互轉，並可線上預覽
- [NameMC](https://namemc.com/) - 查詢玩家外觀、歷史使用者名稱及 UUID
- [Chunker](https://chunker.app/) - 線上轉換 Java 版與基岩版存檔格式
