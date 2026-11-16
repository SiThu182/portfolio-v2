import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Si Thu Aung | Senior Full Stack Developer",
  description:
    "Portfolio of Si Thu Aung, a Senior Full Stack Developer focused on Laravel, Vue, React, Node.js, React Native, AWS, and enterprise application delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      try {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = savedTheme || (prefersDark ? "dark" : "light");
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
      } catch {
        document.documentElement.classList.add("light");
      }
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
