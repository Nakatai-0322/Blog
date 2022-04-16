const feed_options = {
    canonical_base: "https://nakatai.ga",
};
const path = require("path");

module.exports = {
    title: "Nakatai Blog",
    theme: path.resolve(__dirname, './theme/lib'),
    description: "Nakatai's Blog",
    head: [
        ["link", { rel: "icon", href: "//minotar.net/helm/d297f52003024e5d944fd78edc82891a" }],
        ["link", { href: "/css/style.css", rel: "stylesheet" }],
        ["meta", { charset: "UTF-8" }],
        ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }],
        ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }]
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
        "vuepress-plugin-google-adsense": {
            adClient: "ca-pub-2041303981654233",
            adsTxt: true,
        },
        "sitemap": {
            hostname: "https://nakatai.ga",
            exclude: ["/404.html"],
            dateFormatter: val => {
                return new Date().toISOString()
            },
        },
        "@vuepress/google-analytics": {
            ga: "UA-209688701-2",
        },
    },
    plugins: [
        ["feed", feed_options]
    ],

    themeConfig: {
        lang: "ja-JP",
        personalInfo: {
            nickname: "Nakatai",
            description: "開発者もどき",
            location: "Gifu Pref",
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
                <a href="/policy/disclaimer">
                    免責事項
                </a>&nbsp;|&nbsp;
                <a href="/policy/privacypolicy">
                    プライバシーポリシー
                </a>
                <br>
                &copy; 2021-present Nakatai Some Right Reserved.
                <br>
                <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                    <img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" width="120" height="42" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg">
                </a>
                <br>
                <a xmlns:cc="http://creativecommons.org/ns#" href="https://nakatai.ga" property="cc:attributionName" rel="cc:attributionURL">
                    Nakatai
                </a> の "
                <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">
                    Nakatai Blog
                </span>"は
                <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                    クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス
                </a>で提供されています。
                <br>
                <a href="https://app.netlify.com/sites/nakatai-blog/deploys">
                    <img src="https://api.netlify.com/api/v1/badges/c4ef2306-a8e0-488c-b963-521f2e62c753/deploy-status" width="135" height="20">
                </a>
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
