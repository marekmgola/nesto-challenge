import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import QueryClientProvider from "@/utils/providers/QueryClientProvider";
import { inter, interTight } from "@/utils/theme/fonts";

export const metadata: Metadata = {
  title: "Nesto Mortgages",
  description: "Best mortgage rates on the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider>
      <html lang="en">
        <body className={`${inter.variable} ${interTight.variable} layout-container`}>
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
