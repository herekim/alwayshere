import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          {/* <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" /> */}
          <link rel="icon" type="image/png" href="/static/favicons/keyboard.png" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <script
            src="https://giscus.app/client.js"
            data-repo="herekim/alwayshere"
            data-repo-id="R_kgDOIszcKg"
            data-category="[ENTER CATEGORY NAME HERE]"
            data-category-id="[ENTER CATEGORY ID HERE]"
            data-mapping="title"
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
