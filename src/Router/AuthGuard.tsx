import { Outlet, Navigate } from "react-router-dom";

type AuthGuardProps = {
  isPrivate: boolean;
};

export const AuthGuard = ({ isPrivate }: AuthGuardProps) => {
  const isAuthenticated = false;

  if (!isAuthenticated && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
