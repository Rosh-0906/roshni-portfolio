// Vercel Speed Insights Integration
// This script loads the Speed Insights tracking for the portfolio site

(function() {
  'use strict';
  
  // Initialize the queue for Speed Insights
  if (!window.si) {
    window.si = function si() {
      (window.siq = window.siq || []).push(arguments);
    };
  }
  
  // Create and inject the Speed Insights script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  // Add SDK information
  script.setAttribute('data-sdkn', '@vercel/speed-insights');
  script.setAttribute('data-sdkv', '2.0.0');
  
  // Handle load errors
  script.onerror = function() {
    console.log('[Vercel Speed Insights] Failed to load script. Please check if any content blockers are enabled and try again.');
  };
  
  // Inject the script into the page
  document.head.appendChild(script);
})();
