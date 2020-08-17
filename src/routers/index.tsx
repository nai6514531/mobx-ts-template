import React, { Suspense } from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import NotFound from '@/components/NotFound';
import GlobalHeader from '@/components/GlobalHeader';
import LayoutContainer from '@/components/LayoutContainer';
import { Skeleton } from 'antd';
import { RouteConfig } from './genRoute';
import routeData from './route';

interface RouterItem extends RouteConfig {
  strict?: boolean;
}

const BasicLayout: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutContainer header={<GlobalHeader />}>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          {routeData.map((item: RouterItem) => (
            <Route key={item.path} path={item.path} component={item.component} exact={item.exact} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </LayoutContainer>
  );
};

export default BasicLayout;
