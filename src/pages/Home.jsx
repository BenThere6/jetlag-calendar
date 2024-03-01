import React, { useState, useEffect } from 'react';

const Home = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const promptInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setShowButton(false);
      });
    }
  };

  return (
    <div className="home">
      <h1>Welcome to the Jetlag Management App</h1>
      <p>This is your starting point to manage and overcome jetlag effectively.</p>

      {/* Install button */}
      {showButton && (
        <button onClick={promptInstall}>
          Install App
        </button>
      )}

      <div className="content">
        <section>
          <h2>How It Works</h2>
          <p>Learn about the science of jetlag and how our app can help you adjust faster to new time zones.</p>
          {/* Add more content or links */}
        </section>

        <section>
          <h2>Quick Tips</h2>
          <p>Discover quick tips for immediate jetlag relief.</p>
          <p className=''>Discover quick tips for immediate jetlag relief.</p>
          <p className=''>Discover quick tips for immediate jetlag relief.</p>
          <p className=''>Discover quick tips for immediate jetlag relief.</p>
          <p className=''>Discover quick tips for immediate jetlag relief.</p>
          {/* Additional tips or links */}
        </section>

        {/* Add other sections or features as needed */}
      </div>
    </div>
  );
};

export default Home;