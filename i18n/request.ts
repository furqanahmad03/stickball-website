import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'es', 'pt'];
 
export default getRequestConfig(async ({requestLocale}) => {
  const lang = (await requestLocale) || 'en';
  
  if (!locales.includes(lang)) notFound();
 
  return {
    locale: lang,
    messages: (await import(`../messages/${lang}.json`)).default
  };
}); 