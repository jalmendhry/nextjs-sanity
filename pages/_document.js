import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
      console.log('we here bouys');
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="some description"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
