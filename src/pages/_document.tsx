import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#5c2dd5" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="favicon.ico" />
      <title>Connect Four Game</title>
      <body className="overflow-hidden font-sans font-medium">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
