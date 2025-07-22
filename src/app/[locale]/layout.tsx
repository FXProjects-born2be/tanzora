import { Fira_Sans, Inter } from 'next/font/google';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { Footer, Header } from '@/shared/ui/components';

import '@/shared/lib/styles/null.scss';
import '@/shared/lib/styles/base.scss';

import { RequestModal } from '@/featured/contact-popup/ui/RequestModal/RequestModal';

const firaSans = Fira_Sans({
  variable: '--font-fira-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Tanzora',
    default: 'Tanzora',
  },
  description: '',
  openGraph: {
    title: {
      template: '%s | Tanzora',
      default: 'Tanzora',
    },
    description: '',
    //images: 'https://tanzora.io/images/meta.png',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={inter.variable + ' ' + firaSans.variable}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <RequestModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
