/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Head, Main, Html, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    return renderPage()
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Spotify - Clone</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
