import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang='fi'>
        <Head>
          <title>Hello world</title>
        </Head>
        <body>
          <div id='overlays' />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;