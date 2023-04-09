import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ApplBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <ApplBar />
      <div
        style={{
          paddingTop: '20px',
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>

      <Toaster toastOptions={{ duration: 2000, position: 'top-right' }} />
    </>
  );
};
