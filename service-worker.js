self.addEventListener('install', event => {
    // Activate immediately
    self.skipWaiting();
  });
  
  self.addEventListener('fetch', event => {
    // This basic service worker does not modify fetch events.
  });
  