// app/offline/page.tsx

import React from 'react';

const OfflinePage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
      <h1>You Are Offline</h1>
      <p>Please check your internet connection.</p>
      <p>Refresh the page once you are back online.</p>
    </div>
  );
};

export default OfflinePage;
