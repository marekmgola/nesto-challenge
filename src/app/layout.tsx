import type { Metadata } from "next";
import "./globals.css";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import QueryClientProvider from "@/utils/providers/QueryClientProvider";
import { inter, interTight } from "@/utils/theme/fonts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = (await import(`../i18n/translations/${locale}.json`)).default;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <QueryClientProvider>
        <html lang={locale} >
          <body className={`${inter.variable} ${interTight.variable} layout-container`}>
            <Header />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      </QueryClientProvider>
    </NextIntlClientProvider>

  );
}
