import "./globals.css";

export const metadata = {
  title: "Harys Imanulloh — Portofolio",
  description: "Portofolio personal Harys Imanulloh. Strategi pencarian, brand digital, dan beberapa proyek yang masih berjalan. Banjarnegara, Jawa Tengah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Caveat:wght@400;500;600&family=Klee+One:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
