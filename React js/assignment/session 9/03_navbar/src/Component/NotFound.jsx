import React from 'react';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
    </div>
  );
}

export default NotFound;