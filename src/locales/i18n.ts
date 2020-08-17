import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh_CNCommon from './zh_CN/common';
import en_USCommon from './en_US/common';

const resources = {
  'zh-CN': {
    common: {
      ...zh_CNCommon, // 公共部分
    },
  },
  en: {
    common: {
      ...en_USCommon, // 公共部分
    },
  },
};

i18n
  .use(LanguageDetector) // 语言探测器
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: ['common'],
    defaultNS: 'common',
    resources,
    fallbackLng: 'zh-CN', // 默认语言
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome
    returnObjects: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
