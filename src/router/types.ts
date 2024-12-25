import { RouteObject } from 'react-router-dom';

export interface AppRouteObject extends RouteObject {
  title?: string;
  icon?: string;
  children?: AppRouteObject[];
  hideInMenu?: boolean;
}

export type AppRouter = AppRouteObject[]; 