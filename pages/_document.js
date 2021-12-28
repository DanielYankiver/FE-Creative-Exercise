import Document, { Html, Head, Main, NextScript, } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    return (
      <Html>
        <Head>
          <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
          <meta property="og:title" content="Fe Creative Exercise" />
          <meta property="og:site_name" content="Fe Creative Exercise" />
          <link rel="icon" href="/topl-placeholder-icon.png" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-JX1B02SJBX');
                `
              }}
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument