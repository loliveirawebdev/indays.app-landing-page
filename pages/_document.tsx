import { useUncontextualizedLocale } from "../hooks/locale";
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentProps } from "next/document";

export default function CustomDocument(props: DocumentProps) {
  const { strings } = useUncontextualizedLocale(props.locale!);

  return (
    <Html lang={props.locale}>
      <Head>
        <meta name="copyright" content="Simbiose Ventures" />
        <meta name="pagename" content={strings.page.title} />
        <meta name="keywords" content={strings.page.keywords} />
        <meta name="subject" content={strings.page.description} />
        <meta name="subtitle" content={strings.page.description} />
        <meta name="description" content={strings.page.description} />
        <meta name="reply-to" content="lucas.oliveira@simbioseventures.com" />

        <meta charSet="UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="language" content={props.locale} />
        <meta name="publisher" content="Simbiose Ventures" />
        <meta name="author" content="Simbiose, ola@simbioseventures.com" />
        <meta name="revised" content="Sunday, January 1st, 2023, 01:00 pm" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content={props.locale} />
        <meta property="og:site_name" content="indays.app" />
        <meta property="og:image" content="/indays-logo.png" />
        <meta property="og:url" content="https://indays.app" />
        <meta property="og:title" content={strings.page.title} />
        <meta property="og:description" content={strings.page.description} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image" content="/indays-logo.png" />
        <meta property="twitter:title" content={strings.page.title} />
        <meta property="twitter:description" content={strings.page.description} />

        <link rel="canonical" href="https://indays.app/" />
        <link rel="alternate" href="https://indays.app/en" hrefLang="en" />
        <link rel="alternate" href="https://indays.app/" hrefLang="pt-BR" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (context: DocumentContext) => {
  const initialProps = await Document.getInitialProps(context);
  return { ...initialProps, locale: context?.locale || "pt-BR" };
};
