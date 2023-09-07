export const initClickOutside = (element: any, action: any) => {
  const clickHandler = (e: MouseEvent) => {
    if (!element.contains(e.target)) {
      action();
    }
  };

  const addClickOutside = () => {
    window.addEventListener('click', clickHandler);
  };

  const removeClickOutside = () => {
    window.removeEventListener('click', clickHandler);
  };

  return { addClickOutside, removeClickOutside };
};
