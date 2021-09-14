import React from 'react';

export default function Footer() {
  const page = '1';
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span>What if you could feel the night sky like a warm blanket?</span>
        </div>
        <div className="footer-content-right">
          <span>({page})</span>
        </div>
      </div>
    </div>
  );
}
