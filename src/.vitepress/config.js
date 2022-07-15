const path = require("path");

module.exports = {
    title: "Nakatai Blog",
    theme: path.resolve(__dirname, "theme/index.js"),
    description: "Nakatai's Blog",
    head: [
        ["meta", { charset: "UTF-8" }],
        ["link", { rel: "icon", href: "//minotar.net/helm/d297f52003024e5d944fd78edc82891a" }],
        ["link", { href: "/css/style.css", rel: "stylesheet" }],
        ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
        ["script", { async: true, src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2041303981654233", crossorigin: "anonymous" }],
    ],
    locales: {
        "/": {
            lang: "ja-jp",
        },
    },
    plugins: {
        "vuepress-plugin-disqus": {
            shortname: "blog-nakatai-ga",
        },
        "sitemap": {
            hostname: "https://nakatai.ga",
            exclude: ["/404"],
            changefreq: "daily",
            dateFormatter: val => {
                return new Date().toISOString()
            },
        },
    },
    plugins: [
        ["feed", {
            canonical_base: "https://nakatai.ga",
        }]
    ],

    themeConfig: {
        lang: "ja-JP",
        personalInfo: {
            nickname: "Nakatai",
            description: `
            開発者もどき<br><a href="/profile">プロフィール</a>
            `,
            location: "Japan, Gifu Pref.(JP-21)",
            organization: "FREESERVER PROJECT etc...",
            email: "info@nakatai.ga",
            avatar: "https://cdn.nakatai.ga/img/nakatai.webp",
            sns: {
                twitter: {
                    account: "Nakatai_0322",
                    link: "https://go.nakatai.ga/twitter",
                },
                github: {
                    account: "Nakatai-0322",
                    link: "https://go.nakatai.ga/github",
                },
                instagram: {
                    account: "Nakatai_0322",
                    link: "https://go.nakatai.ga/instagram",
                },
                reddit: {
                    account: 'Nakatai_0322',
                    link: 'https://go.nakatai.ga/reddit',
                },
            },
        },

        header: {
            background: {
                // url: "",
                useGeo: true,
            },
            showTitle: true,
        },

        footer: {
            poweredBy: true,
            poweredByTheme: true,
            custom: `
                <a href="/policy/tos">
                    利用規約
                </a>&nbsp;|&nbsp;
                <a href="/policy/privacypolicy">
                    プライバシーポリシー
                </a>
                <br>
                &copy; 2021-present Nakatai Some Right Reserved.
                <br>
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                    <img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" width="120" height="42" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg">
                </a>
                <br>
                <a xmlns:cc="http://creativecommons.org/ns#" href="https://nakatai.ga" property="cc:attributionName" rel="cc:attributionURL">
                    Nakatai
                </a> の "
                <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">
                    Nakatai Blog
                </span>"は
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                    クリエイティブ・コモンズ 表示 4.0 国際 ライセンス
                </a>で提供されています。
                <br>
                `,
        },

        infoCard: {
            headerBackground: {
                url: "https://cdn.nakatai.ga/img/header.webp",
                useGeo: false,
            },
        },
        lastUpdated: true,
        nav: [
            { text: "ホーム", link: "/", exact: true },
            { text: "全記事リスト", link: "/posts/", exact: false },
            { text: "RSS", link: "https://nakatai.ga/rss.xml" },
            { text: "GitHub", link: "https://github.com/Nakatai-0322/blog" },
        ],
        smoothScroll: true,
        pagination: {
            perPage: 10,
        },
        defaultPages: {
            home: true,
            posts: true,
        },
        comments: false,
    },
};
