const feed_options = {
    canonical_base: 'https://nakatai.ga',
};

module.exports = {
    title: 'Nakatai Blog',
    theme: 'meteorlxy',
    description: "Nakatai's Blog",
    head: [
        ['link', { rel: 'icon', href: '//minotar.net/helm/d297f52003024e5d944fd78edc82891a' }],
        ['meta', { name: 'og:image', content: '//minotar.net/helm/d297f52003024e5d944fd78edc82891a' }],
        ['link', { href: '/css/style.css', rel: 'stylesheet'}]
    ],
    locales: {
        '/': {
            lang: 'ja-jp',
        },
    },
    plugins: {
        "disqus": {
            "shortname":"blog-nakatai-ga"
        },
        "vuepress-plugin-google-adsense":{
            adClient: "ca-pub-2041303981654233",
            adsTxt: true,
        },
        'sitemap': {
            hostname: 'https://nakatai.ga',
            exclude: ["/404.html"],
            dateFormatter: val => {
                return new Date().toISOString()
            }
        },
        '@vuepress/google-analytics': {
            ga: 'UA-209688701-2'
        },
    },
    plugins: [
        [ 'feed', feed_options ]
    ],

    themeConfig: {
        lang: 'ja-JP',
        personalInfo: {
            nickname: 'Nakatai',
            description: '開発者もどき',
            location: 'Gifu Pref',
            organization: 'FREESERVER PROJECT etc...',
            email: 'info@nakatai.ga',
            avatar: 'https://go.nakatai.ga/icon_trimmed',
            sns: {
                twitter: {
                    account: 'Nakatai_0322',
                    link: 'https://go.nakatai.ga/twitter',
                },
                github: {
                    account: "Nakatai-0322",
                    link: "https://go.nakatai.ga/github",
                },
            },
    },

        header: {
            background: {
                // url: '',
                useGeo: true,
            },
            showTitle: true,
        },

        footer: {
            poweredBy: true,
            poweredByTheme: true,
            custom: '<a href="https://nakatai.ga/policy/disclaimer">免責事項</a> | <a href="https://nakatai.ga/policy/privacypolicy">プライバシーポリシー</a><br> <a href="https://github.com/Nakatai-0322/blog">GitHubソース</a><br>&copy; 2021-present Nakatai Some Right Reserved. <br><a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/CC-BY-SA_icon.svg" width="200"></a> <a href="https://app.netlify.com/sites/nakatai-blog/deploys"><img src="https://api.netlify.com/api/v1/badges/c4ef2306-a8e0-488c-b963-521f2e62c753/deploy-status"></a> ',
        },

        infoCard: {
            headerBackground: {
                url: 'https://nakatai.ga/img/APd7S4w.webp',
                useGeo: false,
            },
        },

        lastUpdated: true,

        nav: [
            { text: 'ホーム', link: '/', exact: true },
            { text: '全記事リスト',link:'/posts/',exact: false },
            { text: 'RSS',link:'https://nakatai.ga/feed.json'},
        ],

        smoothScroll: true,

        pagination: {
            perPage: 5,
        },

        defaultPages: {
            home: true,
            posts: true,
        },
        comments: false,
    },
};
