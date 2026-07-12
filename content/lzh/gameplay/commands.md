---
title: 常用之令
description: 常伺中傳送、營造、飾設與娛樂之令
order: 20
icon: Wrench
---

此頁理常玩家所用之令。新玩家預爲黃名之身，考過後成白名正員；執事之令不列於此。

欲稽原版令之完法，請直觀文末「原版令之參」。

## 傳送與位

<table>
<thead>
<tr><th scope="col">能</th><th scope="col">常法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td>主城</td><td><code>/spawn</code> 或 <code>/lobby</code></td><td>返主城</td></tr>
<tr><td>原版傳送</td><td><a href="https://zh.minecraft.wiki/w/命令/tp"><code>/tp</code></a></td><td>傳至定標或玩家之位</td></tr>
<tr><td rowspan="5">家</td><td><code>/sethome &lt;名&gt;</code></td><td>以今位存爲一家</td></tr>
<tr><td><code>/home</code> 或 <code>/home gui</code></td><td>啟家之選單</td></tr>
<tr><td><code>/home &lt;名&gt;</code></td><td>直歸定家</td></tr>
<tr><td><code>/home icon &lt;質&gt; &lt;名&gt;</code></td><td>以定質設爲家之圖，如 <code>/home icon diamond_block home</code></td></tr>
<tr><td><code>/delhome &lt;名&gt;</code></td><td>刪定家；新員多 2 家，正員多 20 家</td></tr>
<tr><td>傳送之護</td><td><code>/menu</code> → 傳送之護</td><td>設常玩家可否以 <code>/tp</code> 移汝，及是否掛時自拒傳</td></tr>
<tr><td rowspan="3">返故位</td><td><code>/back</code></td><td>返前傳或歿前之位</td></tr>
<tr><td><code>/back [次數]</code></td><td>一退多條故錄</td></tr>
<tr><td><code>/back undo</code> 或 <code>/reback</code></td><td>撤前返，歸方之位</td></tr>
</tbody>
</table>

## 態與伺訊

<table>
<thead>
<tr><th scope="col">能</th><th scope="col">常法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td rowspan="2">掛態</td><td><code>/afk</code> 或 <code>/away</code></td><td>遷掛態；久無操亦自掛</td></tr>
<tr><td><code>/afk &lt;態&gt;</code></td><td>入掛而以自態示於頂及 Tab 列，多 20 字</td></tr>
<tr><td>佈告</td><td><code>/announcements</code></td><td>啟伺佈告之選單；上線時示未讀，啟選單後爲已讀</td></tr>
<tr><td>小示</td><td><code>/tip</code></td><td>觀一伺小示，伺亦不期推示</td></tr>
<tr><td>主選單</td><td><code>/menu</code></td><td>啟主選單</td></tr>
<tr><td>語</td><td><code>/lang</code></td><td>啟語設選單，亦可自主選單入</td></tr>
<tr><td>網登</td><td><code>/weblogin &lt;驗碼&gt;</code></td><td>確網端之登，常自驛鈔完令後於戲內行之，需正員之權</td></tr>
</tbody>
</table>

## 語與私

<table>
<thead>
<tr><th scope="col">能</th><th scope="col">常法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td>公道</td><td><code>/chat</code> 或 <code>/global</code></td><td>歸公道</td></tr>
<tr><td rowspan="2">私道</td><td><code>/msg &lt;玩家&gt;</code></td><td>遷至與該玩家之私道；若今已在此私道，再行之則歸公道</td></tr>
<tr><td><code>/msg</code></td><td>已在諸私道時，直行之則歸公道</td></tr>
<tr><td>暫私</td><td><code>/msg &lt;玩家&gt; &lt;訊&gt;</code></td><td>發一私而不易今之道；<code>/tell</code>、<code>/w</code>、<code>/whisper</code> 亦可以同式</td></tr>
<tr><td>速復</td><td><code>/r &lt;訊&gt;</code> 或 <code>/reply &lt;訊&gt;</code></td><td>復近私之玩家，同不易今之道</td></tr>
<tr><td rowspan="5">語增</td><td><code>@玩家名</code> 或直書玩家名</td><td>提及今道可見之玩家；大小書不敏，如 <code>@steve</code> 或 <code>steve</code> 示爲 <code>@Steve</code></td></tr>
<tr><td><code>%i</code>、<code>[i]</code> 或 <code>[item]</code></td><td>於語中展手物</td></tr>
<tr><td><code>%num</code>，如 <code>%1</code></td><td>於語中展應物欄格之物；<code>%1</code> 爲物欄首格，支 <code>%1</code> 至 <code>%36</code></td></tr>
<tr><td>鏈、<code>av</code> / <code>BV</code> 號</td><td>網址及 Bilibili 影片號自示爲可點之文</td></tr>
<tr><td>MiniMessage 式</td><td>正員可於語中用色、粗/斜等飾、漸、虹與 reset；不支點擊事、擇器、換行等籤</td></tr>
<tr><td rowspan="2">語設</td><td><code>/menu</code> → 語設</td><td>設提及醒及語延；延可擇 <code>off</code>、<code>3s</code>、<code>5s</code>、<code>7s</code>，啟後諸語道皆於定時後發</td></tr>
<tr><td><code>/cancel</code> 或 <code>/c</code></td><td>罷己未發之延訊</td></tr>
</tbody>
</table>

## 營造與創

### Axiom

**Axiom** 爲一能強之通體 Minecraft 世編模組，支即時形刻、營輔、筆器諸專能。

- [Modrinth 模頁](https://modrinth.com/mod/axiom) — 取模本體
- [伺 Axiom 用教](https://hi-ysumc.feishu.cn/wiki/QDJBwtCBEi5eLakfWCvcRtErnvb) — 本服專用指南

> **捷鍵之示：**
>
> - 於創造式下按 `左 Alt` 啟 Builder 選單
> - 按 `右 Shift` 入 Editor 式（形編、筆器等）

### 創世神（WorldEdit）

**WorldEdit** 爲故典營輔外掛，宜速復、貼、旋營構，及鉅域形調。合 Axiom 用效更佳。

伺已內建 WorldEdit 外掛，玩家無需於客端裝關 Mod，入伺後即直用。

- [常令一覽（中）](https://www.mcmod.cn/post/3050.html)
- [完令收錄（中）](https://www.mcmod.cn/post/3533.html)
- [官令列表（英）](https://intellectualsites.gitbook.io/fastasyncworldedit/features/main-commands-and-permissions)

## 飾與互

<table>
<thead>
<tr><th scope="col">能</th><th scope="col">常法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td>飾顱</td><td><code>/headdb</code></td><td>啟飾顱庫，取諸飾顱</td></tr>
<tr><td>帽</td><td><code>/hat</code> 或 <code>/head</code></td><td>以手執之物戴於頂</td></tr>
<tr><td>甲架</td><td><code>/asedit give</code></td><td>取甲架編器</td></tr>
<tr><td rowspan="2">隱展框</td><td><code>/imageframe giveinvisibleframe glowing</code></td><td>取耀隱展框</td></tr>
<tr><td><code>/imageframe giveinvisibleframe regular</code></td><td>取常隱展框</td></tr>
<tr><td rowspan="3">姿動</td><td><code>/sit</code></td><td>坐</td></tr>
<tr><td><code>/lay</code></td><td>臥</td></tr>
<tr><td><code>/crawl</code></td><td>匍</td></tr>
<tr><td>棄桶</td><td><code>/trash</code>、<code>/trashcan</code> 或 <code>/garbage</code></td><td>啟棄桶之面，入中之物永銷</td></tr>
</tbody>
</table>

### 名籤

名籤以自定語中玩家名兩側之前後綴。需正員之權，宜置短號、色式或簡態，不議書長句。

<table>
<thead>
<tr><th scope="col">法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td><code>/nametag</code> 或 <code>/nametag view</code></td><td>觀今前綴、後綴、語預，啟式編器之鏈</td></tr>
<tr><td><code>/nametag prefix</code></td><td>惟觀今前綴</td></tr>
<tr><td><code>/nametag suffix</code></td><td>惟觀今後綴</td></tr>
<tr><td><code>/nametag prefix set &lt;文&gt;</code></td><td>設名前綴</td></tr>
<tr><td><code>/nametag suffix set &lt;文&gt;</code></td><td>設名後綴</td></tr>
<tr><td><code>/nametag prefix clear</code> 或 <code>/nametag suffix clear</code></td><td>惟清前或後綴</td></tr>
<tr><td><code>/nametag clear</code></td><td>同清自定前後綴</td></tr>
</tbody>
</table>

限與式：

- 前後綴之文各多 200 字。
- `set` 文不得空；欲刪請用應 `clear` 令。
- 文用 MiniMessage 式，支色、粗/斜等飾、漸、虹、浮示諸常籤。
- 不支點擊事、擇器等或礙安或語示之籤。
- 可用 `%player_...%` 諸玩家關 PlaceholderAPI 變，他佔符不納。

## 物與世理

<table>
<thead>
<tr><th scope="col">能</th><th scope="col">常法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td rowspan="2">清落物</td><td><code>/rmitems</code> 或 <code>/removeitems</code></td><td>以預 50 格徑清周落物</td></tr>
<tr><td><code>/rmitems &lt;徑&gt;</code></td><td>以定徑清落物，如 <code>/rmitems 20</code>，徑域爲 1 至 300</td></tr>
<tr><td>暫白單</td><td><code>/tempwhitelist &lt;玩家名&gt;</code>、<code>/twl &lt;玩家名&gt;</code> 或 <code>/tempwl &lt;玩家名&gt;</code></td><td>爲友增 1 辰暫白單，需正員之權</td></tr>
</tbody>
</table>

> 黃名玩家（新員預身）不得用 `/rmitems` 及 `/tempwhitelist`。

## 樂與娛

<table>
<thead>
<tr><th scope="col">能</th><th scope="col">常法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td rowspan="5">樂</td><td><code>/music</code></td><td>啟樂控臺，需裝 <a href="https://modrinth.com/plugin/plasmo-voice">PlasmoVoice</a> 模</td></tr>
<tr><td><code>/music search &lt;鍵詞&gt;</code></td><td>搜曲</td></tr>
<tr><td><code>/music page &lt;頁碼&gt;</code></td><td>遷樂列頁碼</td></tr>
<tr><td><code>/music random</code></td><td>得一隨機唱片</td></tr>
<tr><td><code>/music randomplay</code></td><td>於近唱機播隨樂</td></tr>
<tr><td>煙火</td><td><code>/firework gun</code></td><td>取一隨機煙火發器</td></tr>
</tbody>
</table>

## PVP 之控

PVP 預閉。惟於雙允之況下啟；戰中入暫鎖態，鎖竟前不得閉 PVP。

<table>
<thead>
<tr><th scope="col">能</th><th scope="col">常法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td rowspan="6">PVP 態</td><td><code>/pvp</code> 或 <code>/pvp toggle</code></td><td>遷己 PVP 態</td></tr>
<tr><td><code>/pvp on</code></td><td>啟己 PVP</td></tr>
<tr><td><code>/pvp off</code></td><td>閉己 PVP；戰鎖期間不得閉</td></tr>
<tr><td><code>/pvp status</code></td><td>觀己 PVP 態及今設</td></tr>
<tr><td><code>/pvp gui</code> 或 <code>/pvp settings</code></td><td>啟 PVP 設選單</td></tr>
<tr><td><code>/pvp help</code></td><td>觀 PVP 令助</td></tr>
</tbody>
</table>

PVP 設選單含：

- PVP 開閉：是否許汝豫玩家對戰。
- 生護：預啟，用以護汝馴之生，及汝騎時關之生護邏。
- 騎生之損：預許；可控汝騎生時，他已啟 PVP 之玩家可否攻關生。
- 歿後自啟：預啟；閉 PVP 之玩家歿後自啟 PVP，便續豫戰。

若汝閉 PVP 而主動攻已啟 PVP 之玩家，初攻將罷而示；頃間復攻同玩家將自爲汝啟 PVP。

## 小戲

<table>
<thead>
<tr><th scope="col">能</th><th scope="col">常法</th><th scope="col">說</th></tr>
</thead>
<tbody>
<tr><td>走酷</td><td><code>/apk start</code></td><td>始走酷之挑，難隨進遞增</td></tr>
<tr><td>誰爲殺手</td><td><code>/spy</code></td><td>入「誰爲殺手」小戲</td></tr>
</tbody>
</table>

## 原版令之參

伺支以下原版令，點令名可躍至 Minecraft Wiki 觀完法與詳說：

| 令 | 說 | 需正員 |
|------|------|:----------:|
| [`/attribute`](https://zh.minecraft.wiki/w/命令/attribute) | 稽或竄實體之屬值 | ✔ |
| [`/clear`](https://zh.minecraft.wiki/w/命令/clear) | 清玩家囊中物 | |
| [`/damage`](https://zh.minecraft.wiki/w/命令/damage) | 對實體致定類與值之損 | ✔ |
| [`/effect`](https://zh.minecraft.wiki/w/命令/effect) | 爲實體增或清態效 | ✔ |
| [`/enchant`](https://zh.minecraft.wiki/w/命令/enchant) | 爲玩家手物附 | |
| [`/fill`](https://zh.minecraft.wiki/w/命令/fill) | 以定塊填域 | ✔ |
| [`/gamemode`](https://zh.minecraft.wiki/w/命令/gamemode) | 遷玩家戲式 | |
| [`/give`](https://zh.minecraft.wiki/w/命令/give) | 予玩家定物 | |
| [`/item`](https://zh.minecraft.wiki/w/命令/item) | 竄容器或實體裝欄中物 | ✔ |
| [`/ride`](https://zh.minecraft.wiki/w/命令/ride) | 控實體之騎關 | ✔ |
| [`/save-all`](https://zh.minecraft.wiki/w/命令/save) | 立存伺世之料 | ✔ |
| [`/seed`](https://zh.minecraft.wiki/w/命令/seed) | 示今世之種 | |
| [`/setblock`](https://zh.minecraft.wiki/w/命令/setblock) | 於定位置塊 | ✔ |
| [`/summon`](https://zh.minecraft.wiki/w/命令/summon) | 於定位生實體 | ✔ |
| [`/tp`](https://zh.minecraft.wiki/w/命令/tp) | 傳實體至定位或他實體 | |
| [`/tellraw`](https://zh.minecraft.wiki/w/命令/tellraw) | 向玩家發格化 JSON 文訊 | |
| [`/time`](https://zh.minecraft.wiki/w/命令/time) | 稽或竄世時 | |
| [`/weather`](https://zh.minecraft.wiki/w/命令/weather) | 遷世天 | |
