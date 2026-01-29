/**
 * Sets up a counter that the user can click to increment.
 * @param {Element} element The HTML element to hold the counter.
 */
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
