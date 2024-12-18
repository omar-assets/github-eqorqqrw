export const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "img-src 'self' https://images.unsplash.com data:",
    "style-src 'self' 'unsafe-inline'",
    "script-src 'self'",
    "connect-src 'self' https://api.brixasset.com https://*.firebaseio.com",
    "frame-ancestors 'none'",
  ].join('; '),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
};

export const applySecurityHeaders = (): void => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    if (document.head.querySelector(`meta[http-equiv="${key}"]`)) return;
    
    const meta = document.createElement('meta');
    meta.httpEquiv = key;
    meta.content = value;
    document.head.appendChild(meta);
  });
};