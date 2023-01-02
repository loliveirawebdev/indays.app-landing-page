import Script from "next/script";
import React from "react";

export const Analytics: React.FC = () => {
  return (
    <React.Fragment>
      <Script
        strategy="lazyOnload"
        id="GoogleTagManagerImport"
        src="https://www.googletagmanager.com/gtag/js?id=G-FZ9FMMSVMF"
      />

      <Script id="GoogleTagManagerConfig" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-FZ9FMMSVMF');
        `}
      </Script>
    </React.Fragment>
  );
};
