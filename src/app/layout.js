import Script from "next/script";
import FooterComponent from "./(marketing)/components/FooterComponent";
import HeaderComponent from "./(marketing)/components/HeaderComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* favicon */}
        <link rel="icon" href="./img/icon.png" />
        <Script strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        <link href="./lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="./lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

        <link href="./lib/css/bootstrap.min.css" rel="stylesheet" />

        <link href="./lib/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <div>
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
