export const hasClass = (element: Element | null, className: string) => {
  return element?.classList.contains(className);
};
