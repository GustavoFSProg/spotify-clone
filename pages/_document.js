/* eslint-disable @next/next/no-title-in-document-head */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }
    return renderPage()
  }

  render() {
    return (
      <html>
        <Head>
          <title>Sptfy - Clone</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
