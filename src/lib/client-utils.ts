export function scrollToElement(element: string) {
  let section = document.querySelector(element) as HTMLElement;
  let sectionRect = section.getBoundingClientRect();
  // The timeout function is to fix Chrome bug
  // https://stackoverflow.com/questions/15691569/javascript-issue-with-scrollto-in-chrome
  setTimeout(() => {
    window.scrollBy({
      left: 0,
      top: sectionRect.top - 75,
      behavior: "smooth",
    });
  }, 150);
}
