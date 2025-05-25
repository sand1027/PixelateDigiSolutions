import Footer from "./components/Footer";
import Header from "./components/Header";

import "./globals.css";

export const metadata = {
  title: "Pixellate | Retro Web Design & Development",
  description:
    "Crafting pixel-perfect websites with retro charm and modern functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-pixel-dark text-white font-vt323 antialiased">
        '
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
