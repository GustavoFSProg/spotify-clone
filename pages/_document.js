// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Main, NextScript } from 'next/document'
// eslint-disable-next-line @next/next/no-head-import-in-document
import { Head } from 'next/head'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }
    return renderPage()
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
