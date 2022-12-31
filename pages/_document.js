import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="icon" type="image/png" href="/static/favicons/keyboard.png" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <script
            src="https://giscus.app/client.js"
            data-repo="herekim/alwayshere"
            data-repo-id="R_kgDOIszcKg"
            data-category="Announcements"
            data-category-id="DIC_kwDOIszcKs4CTV0c"
            data-mapping="pathname"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="1"
            data-input-position="top"
            data-theme="preferred_color_scheme"
            data-lang="ko"
            data-loading="lazy"
            crossOrigin="anonymous"
            async
          ></script>
        </Head>
        <body className="bg-white font-sans text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
