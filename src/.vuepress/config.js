import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
    theme: recoTheme({
        title: 'Nakatai Blog',
        theme: recoTheme({
            style: '@vuepress-reco/style-default',
            logo: '',
            author: 'Nakatai',
            docsRepo: 'https://github.com/vuepress-reco/docs-v2',
            docsBranch: 'main',
            docsDir: '/src',
            lastUpdatedText: '最終更新日時',
            vuePreviewsDir: './docs/.vuepress/vue-previews',
            componentsDir: './docs/.vuepress/components',
            navbar: [
                { text: "ホーム", link: "/", exact: true },
                { text: "全記事リスト", link: "/posts/", exact: false },
                { text: "RSS", link: "https://nakatai.xyz/rss.xml" },
                { text: "GitHub", link: "https://github.com/Nakatai-0322/blog" },
            ]
        }),
    })
})
