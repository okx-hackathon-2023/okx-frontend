import { useState, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// components
import {observer} from "mobx-react";
import LoadingScreen from '../components/loading-screen';
//
import Login from '../pages/LoginPage';
import { useAuthContext } from './useAuthContext';
import {rootStore} from "../mobX/stores";

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: ReactNode;
};

function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!rootStore.userStore.isConnectedWallet) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <> {children} </>;
}

export default observer(AuthGuard);
