const hasOwnProperty = {}.hasOwnProperty;

const texts = {
  "meals.breakfast.title": "breakfast",
  "meals.lunch.title": "lunch",

  "dishes.main.title": "main",

  "dishes.options.hotdog": "hotdog",
  "dishes.options.burger": "burger",
  "dishes.options.pita": "pita",
  "dishes.options.bread-roll": "bread roll",
};

/**
 * @param {keyof texts} k
 * @returns {string}
 */
export default function (k) {
  if (hasOwnProperty.call(texts, k)) {
    return texts[k];
  }
  return "";
}
