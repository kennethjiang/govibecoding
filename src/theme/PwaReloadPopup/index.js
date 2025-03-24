import React from 'react';

export default function PwaReloadPopup({ onReload }) {
  return (
    <div className="pwa-reload-popup">
      <div className="pwa-reload-popup__content">
        <p>New content is available.</p>
        <button onClick={onReload}>Reload</button>
      </div>
    </div>
  );
}