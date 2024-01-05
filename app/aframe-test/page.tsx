import React from 'react';

export default function Page() {
  return (
    <div className="mobile-phone">
      <div className="screen">
        <iframe
          src="https://datalawcompanion.org/"
          style={{
            width: '100%',
            border: 'none',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
}
