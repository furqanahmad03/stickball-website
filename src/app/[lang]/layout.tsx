import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar';

const locales = ['en', 'es', 'pt'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang)) notFound();

  const messages = await getMessages({ locale: lang });

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      {children}
    </NextIntlClientProvider>
  );
}
