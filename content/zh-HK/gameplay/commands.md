---
title: 常用指令
description: 日常伺服器中傳送、建築、裝飾和娛樂指令
order: 20
icon: Wrench
---

本頁整理普通玩家會用到的指令。新玩家預設為黃名身份，考察通過後會成為白名正式成員；管理員命令不在本頁列出。

需要查詢原版命令完整語法時，請直接檢視文末的「原版指令參考」。

## 傳送與位置

<table>
<thead>
<tr><th scope="col">功能</th><th scope="col">常用用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td>主城</td><td><code>/spawn</code> 或 <code>/lobby</code></td><td>回到主城</td></tr>
<tr><td>原版傳送</td><td><a href="https://zh.minecraft.wiki/w/命令/tp"><code>/tp</code></a></td><td>傳送到指定座標或玩家位置</td></tr>
<tr><td rowspan="5">家</td><td><code>/sethome &lt;名字&gt;</code></td><td>把當前位置儲存為一個家</td></tr>
<tr><td><code>/home</code> 或 <code>/home gui</code></td><td>開啟家選單</td></tr>
<tr><td><code>/home &lt;名字&gt;</code></td><td>直接回到指定的家</td></tr>
<tr><td><code>/home icon &lt;材質&gt; &lt;名字&gt;</code></td><td>把指定材質設定為家的圖示，例如 <code>/home icon diamond_block home</code></td></tr>
<tr><td><code>/delhome &lt;名字&gt;</code></td><td>刪除指定的家；新成員最多 2 個家，正式成員最多 20 個家</td></tr>
<tr><td>傳送保護</td><td><code>/menu</code> → 傳送保護</td><td>設定普通玩家是否可以用 <code>/tp</code> 移動你，以及是否在掛機時自動拒絕被傳送</td></tr>
<tr><td rowspan="3">返回歷史位置</td><td><code>/back</code></td><td>返回上一次傳送或死亡前的位置</td></tr>
<tr><td><code>/back [次數]</code></td><td>一次回退多條歷史記錄</td></tr>
<tr><td><code>/back undo</code> 或 <code>/reback</code></td><td>撤銷上一次返回，回到剛才的位置</td></tr>
</tbody>
</table>

## 狀態與伺服器資訊

<table>
<thead>
<tr><th scope="col">功能</th><th scope="col">常用用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td rowspan="2">掛機狀態</td><td><code>/afk</code> 或 <code>/away</code></td><td>切換掛機狀態；長時間無操作也會自動進入掛機</td></tr>
<tr><td><code>/afk &lt;狀態&gt;</code></td><td>進入掛機並把自訂狀態顯示在頭頂和 Tab 列表，最多 20 個字元</td></tr>
<tr><td>公告</td><td><code>/announcements</code></td><td>開啟伺服器公告選單；上線時會提示未讀公告，開啟選單後視為已讀</td></tr>
<tr><td>小提示</td><td><code>/tip</code></td><td>檢視一則伺服器小提示，伺服器也會不定期推播提示</td></tr>
<tr><td>主選單</td><td><code>/menu</code></td><td>開啟主選單</td></tr>
<tr><td>語言</td><td><code>/lang</code></td><td>開啟語言設定選單，也可以從主選單進入</td></tr>
<tr><td>網頁登入</td><td><code>/weblogin &lt;驗證碼&gt;</code></td><td>確認網頁端登入，通常從網站複製完整命令後在遊戲內執行，需要正式成員權限</td></tr>
</tbody>
</table>

## 聊天與私訊

<table>
<thead>
<tr><th scope="col">功能</th><th scope="col">常用用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td>公共頻道</td><td><code>/chat</code> 或 <code>/global</code></td><td>回到公共聊天頻道</td></tr>
<tr><td rowspan="2">私聊頻道</td><td><code>/msg &lt;玩家&gt;</code></td><td>切換到與該玩家的私聊頻道；如果當前已經在這個私聊頻道，再執行一次會回到公共頻道</td></tr>
<tr><td><code>/msg</code></td><td>已經在任意私聊頻道時，直接執行會回到公共頻道</td></tr>
<tr><td>臨時私訊</td><td><code>/msg &lt;玩家&gt; &lt;訊息&gt;</code></td><td>發送一則私訊但不改變當前聊天頻道；<code>/tell</code>、<code>/w</code>、<code>/whisper</code> 也可使用同樣寫法</td></tr>
<tr><td>快速回覆</td><td><code>/r &lt;訊息&gt;</code> 或 <code>/reply &lt;訊息&gt;</code></td><td>回覆最近私聊過的玩家，同樣不會改變當前聊天頻道</td></tr>
<tr><td rowspan="5">聊天增強</td><td><code>@玩家名</code> 或直接輸入玩家名</td><td>提及當前頻道可見的玩家；大小寫不敏感，例如 <code>@steve</code> 或 <code>steve</code> 會顯示為 <code>@Steve</code></td></tr>
<tr><td><code>%i</code>、<code>[i]</code> 或 <code>[item]</code></td><td>在聊天中展示手中物品</td></tr>
<tr><td><code>%num</code>，例如 <code>%1</code></td><td>在聊天中展示對應物品欄格子的物品；<code>%1</code> 是物品欄第一格，支援 <code>%1</code> 到 <code>%36</code></td></tr>
<tr><td>連結、<code>av</code> / <code>BV</code> 號</td><td>網址和 Bilibili 影片號會自動顯示為可點擊文字</td></tr>
<tr><td>MiniMessage 樣式</td><td>正式成員可在聊天中使用顏色、粗體/斜體等裝飾、漸層、彩虹與 reset；不支援點擊事件、選擇器、換行等標籤</td></tr>
<tr><td rowspan="2">聊天設定</td><td><code>/menu</code> → 聊天設定</td><td>設定提及提醒和聊天延遲；延遲可選 <code>off</code>、<code>3s</code>、<code>5s</code>、<code>7s</code>，啟用後所有聊天頻道都會在指定時間後發送</td></tr>
<tr><td><code>/cancel</code> 或 <code>/c</code></td><td>取消自己尚未發送的延遲訊息</td></tr>
</tbody>
</table>

## 建築與創作

### Axiom

**Axiom** 是一款功能強大的一體化 Minecraft 世界編輯模組，支援即時地形雕刻、建築輔助、筆刷工具等專業功能。

- [Modrinth 模組頁面](https://modrinth.com/mod/axiom) — 下載模組本體
- [伺服器 Axiom 使用教學](https://hi-ysumc.feishu.cn/wiki/QDJBwtCBEi5eLakfWCvcRtErnvb) — 本服專屬使用指南

> **快捷鍵提示：**
>
> - 在創造模式下按住 `左 Alt` 開啟 Builder 選單
> - 按 `右 Shift` 進入 Editor 模式（地形編輯、筆刷工具等）

### 創世神（WorldEdit）

**WorldEdit** 是經典的建築輔助外掛，適合快速複製、貼上、旋轉建築結構，以及大範圍地形調整。配合 Axiom 使用效果更佳。

伺服器已內建 WorldEdit 外掛，玩家無需在客戶端安裝相關 Mod，加入伺服器後即可直接使用。

- [常用命令一覽（中文）](https://www.mcmod.cn/post/3050.html)
- [完整命令收錄（中文）](https://www.mcmod.cn/post/3533.html)
- [官方命令列表（英文）](https://intellectualsites.gitbook.io/fastasyncworldedit/features/main-commands-and-permissions)

## 裝飾與互動

<table>
<thead>
<tr><th scope="col">功能</th><th scope="col">常用用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td>裝飾頭顱</td><td><code>/headdb</code></td><td>開啟裝飾頭顱資料庫，獲取各類裝飾用頭顱</td></tr>
<tr><td>帽子</td><td><code>/hat</code> 或 <code>/head</code></td><td>將手中持有的物品戴到頭上</td></tr>
<tr><td>盔甲架</td><td><code>/asedit give</code></td><td>獲取盔甲架編輯器</td></tr>
<tr><td rowspan="2">隱形展示框</td><td><code>/imageframe giveinvisibleframe glowing</code></td><td>獲取發光隱形展示框</td></tr>
<tr><td><code>/imageframe giveinvisibleframe regular</code></td><td>獲取普通隱形展示框</td></tr>
<tr><td rowspan="3">姿勢動作</td><td><code>/sit</code></td><td>坐下</td></tr>
<tr><td><code>/lay</code></td><td>躺下</td></tr>
<tr><td><code>/crawl</code></td><td>爬行</td></tr>
<tr><td>垃圾桶</td><td><code>/trash</code>、<code>/trashcan</code> 或 <code>/garbage</code></td><td>開啟垃圾桶介面，放入其中的物品將被永久銷毀</td></tr>
</tbody>
</table>

### 名稱標籤

名稱標籤用於自訂聊天中玩家名兩側的前綴和後綴。它需要正式成員權限，適合放短稱號、顏色樣式或簡單狀態，不建議寫太長的句子。

<table>
<thead>
<tr><th scope="col">用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td><code>/nametag</code> 或 <code>/nametag view</code></td><td>檢視當前前綴、後綴、聊天預覽，並開啟格式編輯器連結</td></tr>
<tr><td><code>/nametag prefix</code></td><td>只檢視當前前綴</td></tr>
<tr><td><code>/nametag suffix</code></td><td>只檢視當前後綴</td></tr>
<tr><td><code>/nametag prefix set &lt;內容&gt;</code></td><td>設定名稱前綴</td></tr>
<tr><td><code>/nametag suffix set &lt;內容&gt;</code></td><td>設定名稱後綴</td></tr>
<tr><td><code>/nametag prefix clear</code> 或 <code>/nametag suffix clear</code></td><td>只清除前綴或後綴</td></tr>
<tr><td><code>/nametag clear</code></td><td>同時清除自訂前綴和後綴</td></tr>
</tbody>
</table>

限制與格式：

- 前綴和後綴內容各最多 200 個字元。
- `set` 內容不能為空；如需刪除請使用對應的 `clear` 命令。
- 內容使用 MiniMessage 格式，支援顏色、粗體/斜體等裝飾、漸層、彩虹、懸浮提示等常用標籤。
- 不支援點擊事件、選擇器等可能影響安全或聊天顯示的標籤。
- 可使用 `%player_...%` 這類玩家相關 PlaceholderAPI 變數，其他佔位符不會被接受。

## 物品與世界管理

<table>
<thead>
<tr><th scope="col">功能</th><th scope="col">常用用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td rowspan="2">清理掉落物</td><td><code>/rmitems</code> 或 <code>/removeitems</code></td><td>按預設 50 格半徑清理周圍掉落物</td></tr>
<tr><td><code>/rmitems &lt;半徑&gt;</code></td><td>按指定半徑清理掉落物，例如 <code>/rmitems 20</code>，半徑範圍為 1 到 300</td></tr>
<tr><td>臨時白名單</td><td><code>/tempwhitelist &lt;玩家名&gt;</code>、<code>/twl &lt;玩家名&gt;</code> 或 <code>/tempwl &lt;玩家名&gt;</code></td><td>為朋友新增 1 小時臨時白名單，需要正式成員權限</td></tr>
</tbody>
</table>

> 黃名玩家（新成員預設身份）無法使用 `/rmitems` 和 `/tempwhitelist`。

## 音樂與娛樂

<table>
<thead>
<tr><th scope="col">功能</th><th scope="col">常用用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td rowspan="5">音樂</td><td><code>/music</code></td><td>開啟音樂控制臺，需要安裝 <a href="https://modrinth.com/plugin/plasmo-voice">PlasmoVoice</a> 模組</td></tr>
<tr><td><code>/music search &lt;關鍵詞&gt;</code></td><td>搜尋歌曲</td></tr>
<tr><td><code>/music page &lt;頁碼&gt;</code></td><td>切換音樂列表頁碼</td></tr>
<tr><td><code>/music random</code></td><td>獲得一張隨機唱片</td></tr>
<tr><td><code>/music randomplay</code></td><td>在最近的唱片機播放隨機音樂</td></tr>
<tr><td>煙火</td><td><code>/firework gun</code></td><td>獲取一把隨機煙火發射器</td></tr>
</tbody>
</table>

## PVP 控制

PVP 預設關閉。請只在雙方同意的情況下開啟；戰鬥中會進入短暫鎖定狀態，鎖定結束前不能關閉 PVP。

<table>
<thead>
<tr><th scope="col">功能</th><th scope="col">常用用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td rowspan="6">PVP 狀態</td><td><code>/pvp</code> 或 <code>/pvp toggle</code></td><td>切換自己的 PVP 狀態</td></tr>
<tr><td><code>/pvp on</code></td><td>開啟自己的 PVP</td></tr>
<tr><td><code>/pvp off</code></td><td>關閉自己的 PVP；戰鬥鎖定期間無法關閉</td></tr>
<tr><td><code>/pvp status</code></td><td>檢視自己的 PVP 狀態和當前設定</td></tr>
<tr><td><code>/pvp gui</code> 或 <code>/pvp settings</code></td><td>開啟 PVP 設定選單</td></tr>
<tr><td><code>/pvp help</code></td><td>檢視 PVP 命令幫助</td></tr>
</tbody>
</table>

PVP 設定選單包含：

- PVP 開關：是否允許你參與玩家對戰。
- 生物保護：預設開啟，用於保護你馴服的生物，以及你騎乘時相關的生物保護邏輯。
- 騎乘生物傷害：預設允許；可控制你騎乘生物時，其他已開啟 PVP 的玩家是否可以攻擊相關生物。
- 死亡後自動開啟：預設開啟；關閉 PVP 的玩家死亡後會自動開啟 PVP，方便繼續參與對戰。

如果你關閉 PVP 但主動攻擊已開啟 PVP 的玩家，第一次攻擊會被取消並提示；短時間內再次攻擊同一玩家會自動為你開啟 PVP。

## 小遊戲

<table>
<thead>
<tr><th scope="col">功能</th><th scope="col">常用用法</th><th scope="col">說明</th></tr>
</thead>
<tbody>
<tr><td>跑酷</td><td><code>/apk start</code></td><td>開始跑酷挑戰，難度隨進度遞增</td></tr>
<tr><td>誰是殺手</td><td><code>/spy</code></td><td>進入「誰是殺手」小遊戲</td></tr>
</tbody>
</table>

## 原版指令參考

伺服器支援以下原版指令，點擊命令名可跳轉至 Minecraft Wiki 檢視完整語法與詳細說明：

| 指令 | 說明 | 需要正式成員 |
|------|------|:----------:|
| [`/attribute`](https://zh.minecraft.wiki/w/命令/attribute) | 查詢或修改實體的屬性值 | ✔ |
| [`/clear`](https://zh.minecraft.wiki/w/命令/clear) | 清除玩家背包中的物品 | |
| [`/damage`](https://zh.minecraft.wiki/w/命令/damage) | 對實體造成指定類型與數值的傷害 | ✔ |
| [`/effect`](https://zh.minecraft.wiki/w/命令/effect) | 為實體新增或清除狀態效果 | ✔ |
| [`/enchant`](https://zh.minecraft.wiki/w/命令/enchant) | 為玩家手持物品附魔 | |
| [`/fill`](https://zh.minecraft.wiki/w/命令/fill) | 用指定方塊填充區域 | ✔ |
| [`/gamemode`](https://zh.minecraft.wiki/w/命令/gamemode) | 切換玩家遊戲模式 | |
| [`/give`](https://zh.minecraft.wiki/w/命令/give) | 給予玩家指定物品 | |
| [`/item`](https://zh.minecraft.wiki/w/命令/item) | 修改容器或實體裝備欄中的物品 | ✔ |
| [`/ride`](https://zh.minecraft.wiki/w/命令/ride) | 控制實體的騎乘關係 | ✔ |
| [`/save-all`](https://zh.minecraft.wiki/w/命令/save) | 立即儲存伺服器世界資料 | ✔ |
| [`/seed`](https://zh.minecraft.wiki/w/命令/seed) | 顯示當前世界的種子 | |
| [`/setblock`](https://zh.minecraft.wiki/w/命令/setblock) | 在指定位置放置方塊 | ✔ |
| [`/summon`](https://zh.minecraft.wiki/w/命令/summon) | 在指定位置生成實體 | ✔ |
| [`/tp`](https://zh.minecraft.wiki/w/命令/tp) | 傳送實體到指定位置或其他實體處 | |
| [`/tellraw`](https://zh.minecraft.wiki/w/命令/tellraw) | 向玩家發送格式化的 JSON 文字訊息 | |
| [`/time`](https://zh.minecraft.wiki/w/命令/time) | 查詢或修改世界時間 | |
| [`/weather`](https://zh.minecraft.wiki/w/命令/weather) | 切換世界天氣 | |
