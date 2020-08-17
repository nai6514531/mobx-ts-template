import React from 'react';
import { Layout } from 'antd';
import styles from './style.module.less';

interface LayoutContainerProps {
  header: React.ReactChild;
  aside?: React.ReactChild;
}

const LayoutContainer: React.FC<LayoutContainerProps> = props => {
  const { header, aside, children } = props;
  return (
    <Layout>
      {header}
      <Layout>
        <Layout className={styles.layout}>
          {aside}
          <Layout.Content>{children}</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
