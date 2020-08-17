import { Dropdown, Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '@ant-design/icons';
import { ReactComponent as globalIcon } from '@/assets/images/global.svg';
import styles from './style.module.less';

const SelectLang: React.FC = () => {
  const { i18n } = useTranslation();
  const currLang = (i18n && i18n.language) || 'zh-CN';

  const languageLabels = [
    {
      label: '🇨🇳 简体中文',
      value: 'zh-CN',
    },
    {
      label: '🇺🇸 English',
      value: 'en',
    },
  ];

  const setLang = (item: any) => {
    const lang = item && item.key;
    i18n.changeLanguage(lang);
    window.location.reload();
  };

  const menu = (
    <Menu selectedKeys={[currLang]} className={styles.dropDownItem} onClick={setLang}>
      {languageLabels.map((item: any) => (
        <Menu.Item key={item.value}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} className={styles.dropDown}>
      <span>
        <Icon component={globalIcon} className={styles.dropDownIcon} />
      </span>
    </Dropdown>
  );
};

export default SelectLang;
