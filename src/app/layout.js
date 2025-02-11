
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* favicon */}
        <link rel="icon" href="./img/icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
