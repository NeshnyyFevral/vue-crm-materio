export const getImageUrl = (path: string) => {
  const baseUrl = new URL(import.meta.url);
  console.log(new URL(`../..${path}`, baseUrl).href);
  return new URL(`../..${path}`, baseUrl).href;
};
