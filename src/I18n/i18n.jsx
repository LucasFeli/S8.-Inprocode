import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


const resources = {
  en: {
    translation: {
      'total_balance': 'Total Balance',
      'weekly_expenses': 'Expenses - Last Week',
      'today_expenses': 'Today\'s Expenses',
      'respect_yesterday': 'compared to yesterday',
      'currency': '€'
    },
  },
  es: {
    translation: {
      'total_balance': 'Balance total',
      'weekly_expenses': 'Despensas - La semana pasada',
      'today_expenses': 'Despensas de Hoy',
      'respect_yesterday': 'comparado al dia de ayer',
      'currency': '€'
    },
  },
  ca: {
    translation: {
      'total_balance': 'Balanç total',
      'weekly_expenses': 'Despeses-Última setmana',
      'today_expenses': 'Despeses avui',
      'respect_yesterday': 'respecte a ahir',
      'currency': '€'
    },
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
