import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter; 