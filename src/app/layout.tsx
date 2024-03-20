import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/provider/theme/ThemeProvider";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NadimChowdhury",
  description:
    "Design & Developed by Nadim Chowdhury as a MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

// nadim-chowdhury@outlook.com
// https://github.com/nadim-chowdhury
// https://www.linkedin.com/in/nadim-chowdhury/
