import { readable } from 'svelte/store';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
}

export const blogPostData: BlogPost[] = [
    {
    slug: 'why-change-filter',
    title: 'The Unseen Guardian: Why Your Cabin Filter is a Health Hero',
    excerpt: 'Beyond mechanics, your cabin filter is crucial for wellness. We explore the health risks of poor cabin air quality and how...'
  },
  {
    slug: 'oem-vs-aftermarket',
    title: 'OEM vs. Aftermarket: Decoding the Best Value for Your Vehicle',
    excerpt: 'Is dealer-original always better? This guide breaks down the performance, quality, and cost variables between OEM and...'
  },
  {
    slug: 'diy-install-guide',
    title: '5-Minute Upgrade: A DIY Guide to Replacing Your Air Filter',
    excerpt: 'Save time and money with this simple, step-by-step guide to changing your car’s engine air filter. No special tools required...'
  }
];


export const posts = readable<BlogPost[]>(blogPostData);