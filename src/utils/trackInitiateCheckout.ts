type MetaPixelTrack = (
  action: 'track',
  eventName: string,
  params?: Record<string, string | number>,
) => void;

export function trackInitiateCheckout() {
  const metaPixel = (window as Window & { fbq?: MetaPixelTrack }).fbq;

  if (typeof metaPixel !== 'function') return;

  metaPixel('track', 'InitiateCheckout', {
    content_name: 'AI Photo Mastery',
    content_category: 'Oferta',
  });
}
