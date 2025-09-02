import { notFound } from 'next/navigation';

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

  return children;
}
