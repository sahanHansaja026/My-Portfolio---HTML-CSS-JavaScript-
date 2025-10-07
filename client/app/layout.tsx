import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hansaja's Portfolio",
  description: "Created By Baniya's Code Universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <html lang="en">
      <head>
        <style>{`
          @font-face {
            font-family: "Inknut Antiqua";
            src: url("${basePath}/fonts/InknutAntiqua-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: "Inknut Antiqua";
            src: url("${basePath}/fonts/InknutAntiqua-Bold.ttf") format("truetype");
            font-weight: 700;
            font-style: normal;
          }
          @font-face {
            font-family: "Inder";
            src: url("${basePath}/fonts/Inder-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: "Inter";
            src: url("${basePath}/fonts/Inter-VariableFont_opsz,wght.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
          }
        `}</style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
