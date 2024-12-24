import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token'); // 根据实际认证方式修改

  if (!isAuthenticated) {
    // 重定向到登录页，并记录原始目标路由
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard; 