import React from 'react';

export const DownloadButton = ({ store, url, style }) => {

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-dark`}
      style={{ display: 'flex', justifyContent: 'cetner', alignItems: 'center', maxWidth: 'max-content', textAlign: 'start', backgroundColor: '#000', whiteSpace: 'nowrap', borderColor: '#fff', borderWidth: '0.5px', gap: '7px', paddingLeft: store == 'ios' ? '5px' : '12px', ...style }}
    >
      {store == 'android' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 16 16" id="google-play">
          <path fill="#2196F3" d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"></path>
          <path fill="#FFC107" d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"></path>
          <path fill="#4CAF50" d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"></path>
          <path fill="#F44336" d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="48" id="apple" style={{ transform: 'scale(0.7)' }}>
          <path fill="#fff" fill-rule="evenodd" d="M27.175 7.792C28.74 5.772 29.927 2.915 29.498 0c-2.559.178-5.55 1.815-7.295 3.948-1.59 1.934-2.898 4.81-2.387 7.601 2.797.088 5.684-1.589 7.359-3.757zM41 35.217c-1.12 2.495-1.658 3.61-3.1 5.82-2.012 3.085-4.848 6.926-8.366 6.954-3.122.034-3.928-2.046-8.167-2.02-4.239.022-5.122 2.06-8.25 2.029-3.516-.031-6.203-3.497-8.215-6.582-5.627-8.62-6.22-18.738-2.75-24.12 2.47-3.821 6.364-6.057 10.022-6.057 3.723 0 6.065 2.055 9.149 2.055 2.99 0 4.81-2.06 9.117-2.06 3.26 0 6.714 1.786 9.171 4.868-8.057 4.443-6.752 16.017 1.389 19.113z"></path>
        </svg>
      )}
      {
        store == 'ios' && <span style={{ fontSize: '15px', lineHeight: '0.9' }}>Download on the<br /><span style={{ fontSize: '26px', fontWeight: '500' }}>App Store</span></span>
      }
      {
        store == 'android' && <span style={{ fontSize: '15px', lineHeight: '0.9' }}>GET IT ON<br /><span style={{ fontSize: '26px', fontWeight: '500' }}>Google Play</span></span>
      }
    </a>
  );
};

