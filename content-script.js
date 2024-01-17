/**
* Finds an element with the specified text content within the given element and selector.
* @param {Element} element - The element to search within.
* @param {string} selector - The CSS selector to query for elements within the specified element.
* @param {string} text - The text content to search for within the elements.
* @returns {Element|null} - The first element found matching the selector and containing the specified text, or null if not found.
*/
function contains(element, selector, text) {
	return Array.prototype.find.call(element.querySelectorAll(selector), e => e.textContent.includes(text));
}


const maxColumns = 4;

const semesterDropdown = document.querySelector('.semester-dropdown');
let clonedList = semesterDropdown.querySelector('li').cloneNode(true);
semesterDropdown.appendChild(clonedList);

clonedList.querySelectorAll('a').forEach(e => {
	e.removeAttribute('disabled');
	e.removeAttribute('class');
});

const thisYear = new Date().getFullYear();

// Generate and append new list items for the desired number of columns
semesterDropdown.replaceChildren(...Array(maxColumns).fill(0).map((_, i) => {
  const c = clonedList.cloneNode(true);
  const formattedYear = `${thisYear - i}-${(thisYear - i + 1) % 100}`;
  const slicedYear = formattedYear.slice(2, 4);

  c.setAttribute('data-year', slicedYear);
  c.querySelector('h5').textContent = formattedYear;
  return c;
}));

const dropdown = document.querySelector('.semester-select');
const year = dropdown.querySelector('strong').textContent;
const sem = dropdown.querySelector('em').textContent;
console.log(year + " " + sem);

const p = contains(semesterDropdown, "h5", year).parentNode;
p.querySelector('h5').textContent = year;
contains(p, "a", sem).setAttribute('class', 'selected');