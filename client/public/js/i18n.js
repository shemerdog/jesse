const hasOwnProperty = {}.hasOwnProperty;

const texts = {
  en: {
    "meals.breakfast.title": "breakfast",
    "meals.lunch.title": "lunch",

    "dishes.main.title": "main",

    "dishes.options.hotdog": "hotdog",
    "dishes.options.burger": "burger",
    "dishes.options.pita": "pita",
    "dishes.options.bread-roll": "bread roll",
  },
  he: {
    "meals.breakfast.title": "ארוחת בוקר",
    "meals.lunch.title": "צהרים",

    "dishes.main.title": "עיקרית",

    "dishes.options.hotdog": "נקניקיות",
    "dishes.options.burger": "המבורגר",
    "dishes.options.pita": "פיתה",
    "dishes.options.bread-roll": "לחמנייה",
  },
};

/**
 * @param {keyof texts} k
 * @returns {string}
 */
export default function (k, lng = "en") {
  if (hasOwnProperty.call(texts[lng], k)) {
    return texts[k];
  }
  return "";
}
