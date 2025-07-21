// src/lib/utils/imageUtils.ts

/**
 * Converts a standard Google Drive sharing URL into a direct image link
 * that can be used in an <img> src attribute.
 * @param url The original Google Drive URL (e.g., .../view?usp=sharing)
 * @returns A direct image link or the original URL if it's not a convertible Google Drive link.
 */
export function convertGoogleDriveUrl(url: string | null | undefined): string | null {
  if (!url) {
    return null;
  }

  // Check if it's a Google Drive file link
  if (url.includes('drive.google.com/file/d/')) {
    // Use a regular expression to safely extract the file ID
    const regex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      const fileId = match[1];
      // Construct the new, direct link URL
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }

  // If it's not a convertible link, return the original URL
  return url;
}