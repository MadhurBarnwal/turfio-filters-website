// src/routes/+layout.ts

/**
 * This tells SvelteKit to pre-render all pages in your app as static HTML files.
 * This is the key to fixing the 404 errors on Netlify while still
 * allowing for client-side dynamic data fetching.
 */
export const prerender = true;

/**
 * By setting ssr to false, we are telling SvelteKit that this layout
 * does not need to be rendered on the server on-the-fly. It can be
 * delivered as a static shell, and the JavaScript will take over
 * in the browser (which is what you want for your onMount fetch).
 */
export const ssr = false;