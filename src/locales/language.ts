import i18n from '@/locales/i18n';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';

export const getLanguage = () => {
  let localeLang = zhCN;
  const lang = i18n && i18n.language;
  switch (lang) {
    case 'en':
      localeLang = enUS;
      moment.locale('en');
      break;
    case 'zh-CN': // 默认中文
    default:
      localeLang = zhCN;
      moment.locale('zh-cn');
      break;
  }
  return localeLang;
};
