module.exports = [
    ["meta", {
        "charset": "UTF-8",
    }],
    ["link", {
        "rel": "icon",
        "href": "https://cdn.nakatai.ga/img/nakataimc.webp",
    }],
    ["link", {
        "href": "/css/style.css",
        "rel": "stylesheet",
    }],
    ["meta", {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0",
    }],
    ["script", {
        "async": true,
        "src": "https://www.googletagmanager.com/gtag/js?id=G-QVBXKW7FNX",
    }],
    ["script", `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-QVBXKW7FNX');
    `],
    ["script", {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2041303981654233",
        crossorigin: "anonymous"
    }],
];
