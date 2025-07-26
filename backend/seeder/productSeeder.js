let arr = [
  {
    image: "https://dummyimage.com/580x257",
    title: "With research",
    description: "Walk government especially purpose record safe see.",
    category: "electronics",
    brand: "Jones, Ayala and Frank",
    price: 734.21,
    salePrice: 200.59,
    totalStock: 29,
    averageReview: 1.2,
  },
  {
    image: "https://www.lorempixel.com/605/502",
    title: "National weight consumer",
    description:
      "Too want catch alone city. Fall nation share. Always wind time happy let baby trial see.",
    category: "furniture",
    brand: "Flores-Anderson",
    price: 892.53,
    salePrice: 294.04,
    totalStock: 153,
    averageReview: 1.6,
  },
  {
    image: "https://placeimg.com/722/445/any",
    title: "Culture newspaper sea",
    description:
      "Field father join read team. But whole wide as yet now. Meeting a loss man list economy sign population.",
    category: "electronics",
    brand: "Harris LLC",
    price: 800.83,
    salePrice: 157.2,
    totalStock: 89,
    averageReview: 0.1,
  },
  {
    image: "https://placekitten.com/46/286",
    title: "Analysis foreign religious",
    description:
      "Past why environment question wrong explain. Respond realize perform candidate grow we. Stay environmental hotel no guy against. Buy news light interest.",
    category: "furniture",
    brand: "White, Day and Wilkins",
    price: 432.11,
    salePrice: 115.43,
    totalStock: 482,
    averageReview: 3.4,
  },
];

const productCollection = require("../models/product.model");

async function seedProducts() {
  await productCollection.insertMany(arr);
  console.log("data added");
}

module.exports = seedProducts;
