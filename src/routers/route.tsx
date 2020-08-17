import { lazy } from 'react';
import { generateRouteConfig } from './genRoute';

const routeConfig = [
  {
    path: '/',
    component: lazy(() => import('@/pages/App')),
  },
];

export default generateRouteConfig(routeConfig);
