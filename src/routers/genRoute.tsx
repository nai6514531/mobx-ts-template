import { LazyExoticComponent, ComponentType } from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

export interface RouteConfig {
  path: string;
  component: LazyExoticComponent<ComponentType<RouteComponentProps<any, StaticContext, any>>>;
  exact?: boolean;
  auth?: string | string[];
}

export function generateRouteConfig(route: RouteConfig[]): RouteConfig[] {
  return route.map(item => {
    return {
      key: item.path,
      exact: typeof item.exact === 'undefined' ? true : item.exact,
      ...item,
      component: item.component,
    };
  });
}
