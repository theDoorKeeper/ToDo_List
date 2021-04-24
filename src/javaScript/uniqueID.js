const ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `_${Math.random().toString(36).substr(2, 9)}${1}`;
};

const createHtmlElement = (type, id, arrayClasses, content) => {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses) arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;
};

export { ID, createHtmlElement };
