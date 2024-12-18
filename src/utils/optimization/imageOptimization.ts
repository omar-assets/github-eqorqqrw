export interface ImageOptimizationOptions {
  quality?: number;
  width?: number;
  height?: number;
  format?: 'webp' | 'avif' | 'jpeg';
}

export const optimizeImageUrl = (
  url: string,
  options: ImageOptimizationOptions = {}
): string => {
  const {
    quality = 80,
    width,
    height,
    format = 'webp'
  } = options;

  // For Unsplash images
  if (url.includes('unsplash.com')) {
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('q', quality.toString());
    params.append('fm', format);
    params.append('auto', 'format');
    
    return `${url}?${params.toString()}`;
  }

  return url;
};

export const generateSrcSet = (
  url: string,
  widths: number[],
  options: Omit<ImageOptimizationOptions, 'width'> = {}
): string => {
  return widths
    .map(width => {
      const optimizedUrl = optimizeImageUrl(url, { ...options, width });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
};