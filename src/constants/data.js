import images from "./images";

const wines = [
  {
    title: "Leon Beyer Pinot Noir",
    price: "$58",
    tags: "FR | Bottle",
  },
  {
    title: "Wente Vineyards Zinfandel",
    price: "$72",
    tags: "US | Bottle",
  },
  {
    title: "St Baillion Cotes De Provence",
    price: "$55",
    tags: "FR | Bottle",
  },
  {
    title: "Svyturys Baltas",
    price: "$10",
    tags: "LI | 500 ml",
  },
  {
    title: "Leffe Blonde",
    price: "$12",
    tags: "BL | 500 ml",
  },
];

const cocktails = [
  {
    title: "Uptown",
    price: "$20",
    tags: "Orange Infused Vodka | Disaronno | Grapefruit Juice | Lime Juice | Agave",
  },
  {
    title: "Queen Elizabeth",
    price: "$16",
    tags: "Gin | Dry Vermouth | Benedictine",
  },
  {
    title: "Hemingway Daiquiri",
    price: "$14",
    tags: "Light Rum | Maraschino Liquer | Grapefruit Juice | Lime Juice",
  },
  {
    title: "Vieux Carre",
    price: "$25",
    tags: "Rye | Cognac | Benedictine | Peychaud & Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$18",
    tags: "Gin | Sweet Vermouth | Campari ",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
