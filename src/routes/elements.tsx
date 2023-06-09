import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));

export const Market = Loadable(lazy(() => import('../pages/Market')));
export const Fund = Loadable(lazy(() => import("../pages/Fund")));
export const Governance = Loadable(lazy(() => import('../pages/Governance')));
export const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
export const Proposal = Loadable(lazy(() => import('../pages/Proposal')));
export const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
export const PageSix = Loadable(lazy(() => import('../pages/PageSix')));

export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
