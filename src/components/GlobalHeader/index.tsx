import { Layout, Tooltip } from 'antd';
import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectLang from '@/components/SelectLang';
import { useTranslation } from 'react-i18next';
import styles from './style.module.less';

interface TooltipIcon {
  title: string;
  href: string;
  className?: string;
}

const TooltipIcon: React.FC<TooltipIcon> = props => {
  const { title, href, className, children } = props;
  return (
    <Tooltip title={title}>
      <a target="_blank" rel="noopener noreferrer" href={href} className={className}>
        {children}
      </a>
    </Tooltip>
  );
};

const RightArea: React.FC = () => {
  return (
    <div className={styles.right}>
      <SelectLang />
    </div>
  );
};

const Logo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={cx(styles.logo)}>
      <Link to="/">
        {t('systemTitle')}
      </Link>
    </div>
  );
};

const GlobalHeader: React.FC = () => {
  return (
    <Layout.Header className={styles.header}>
      <Logo />
      <RightArea />
    </Layout.Header>
  );
};

export default GlobalHeader;
