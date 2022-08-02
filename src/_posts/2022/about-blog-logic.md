---
title: "ブログの仕組みについて"
date: 2022-07-24
categories:
    - ブログ
menu: main
---

どうもこんにちは。Nakataiです。今回はこのブログがどう動いているかをご説明しようと思います。

## FAQ的なやーつ

大分専門用語を挟むのでわかんないとこあったら個別でググったってください。

### どうやって記事を管理しているのか

GitHubというGitホスティングサービスを利用しています。

Markdownという言語で書いています。因みにMarkdownを身の回りでめちゃくちゃ使っていて、例えば"[FREESERVER](https://freeserver.pro)"の[Wiki](https://wiki.freeserver.pro)とか、リアルのノートにも使っています。

段落の作り方とかがめちゃくちゃ見やすいのですが、友人にノートを見せるとき、見出しを見るや否や「ハッシュタグですか？」ってよく言われます。

### どうやってネット上に大公開しているのか

サイト（厳密に言えばHTMLなど）の生成にはVuePressを使用しています。

デプロイには[Cloudflare Pages](https://pages.cloudflare.com)というサービスを利用しています。

テーマは[Meteroxy Blog Theme](https://github.com/meteorlxy/vuepress-theme-meteorlxy)というものを使っています。無償です（しかも[MITライセンス](https://github.com/meteorlxy/vuepress-theme-meteorlxy/blob/master/LICENSE)）。

因みに`eject`して使っていますが、殆どカスタムしていません。

Vueわかりません（）

## なぜVitePressとかビルドの早いやつを使わないのか

それは移行がめんどくさいのと、難しいからです。

確かにVitePressとかにすればビルドは早くなりますが、[GitHub](https://github.com)の[`feat-vite`](https://github.com/Nakatai-0322/blog/tree/feat-vite)ブランチを見るとわかる通りVitePressでブログ用テーマを適用した状態でのビルドが成功しないという背景があるからです。

はい。いかがでしたでしょうか。個人的に専門用語を挟みすぎて開発者向けの某エンジニアコミュニティサービスの記事みたいになってしまいました。Qiitaに書けってことですね。はい。

ちなみにこの記事はブランチを切って結構な時間放置してしまいました。

危うくこのまま没にするとこだった...（ｾﾌｾﾌ...）

<img src="https://cdn.nakatai.ga/img/sign.webp" width="500" alt="サイン">
