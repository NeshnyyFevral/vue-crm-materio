export const getImageUrl = (path: string) => {
  const baseUrl = new URL(import.meta.url);
  return new URL(`../../${path}`, baseUrl).href;
};
