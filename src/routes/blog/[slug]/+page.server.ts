// src/routes/blog/[slug]/+page.server.ts

import { blogPostData } from '$lib/stores/blogStore';
import type { EntryGenerator } from './$types';

/**
 * This `entries` function runs at build time and tells SvelteKit
 * which pages to pre-render for this dynamic route.
 */
export const entries: EntryGenerator = () => {
  // We map over our blog post data and return an array of objects,
  // where each object has a `slug` property matching the route parameter.
  return blogPostData.map(post => ({
    slug: post.slug
  }));
};