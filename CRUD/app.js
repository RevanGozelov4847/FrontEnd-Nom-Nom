const express = require("express");
const Joi = require("joi");
const app = express();
const cors = require("cors");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

/*********MIDDLEWARE**********/

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

/*********ROUTES**********/

const products = [
  //MEAT
  {
    id: "1",
    name: "Meat",
    price: 199,
    productImage: "uploads/meat1.jpeg",
  },
  {
    id: "2",
    name: "Chicken",
    price: 299,
    productImage: "uploads/chicken.webp",
  },
  {
    id: "3",
    name: "Duck",
    price: 399,
    productImage: "uploads/duck.jpg",
  },
  {
    id: "4",
    name: "Turkey",    
    price: 499,
    productImage: "uploads/turkey.jpeg",
  },
  {
    id: "5",
    name: "olee № 500",    
    price: 599,
    productImage: "uploads/lamb.jpeg",
  },
  {
    id: "6",
    name: "Fish",    
    price: 699,
    productImage: "uploads/fish.jpeg",
  },
    {
    id: "7",
    name: "Mussels",    
    price: 699,
    productImage: "uploads/mussels.jpeg",
  },
      {
    id: "8",
    name: "Schrim",    
    price: 699,
    productImage: "uploads/schrim.jpeg",
  },
      {
    id: "9",
    name: "Tuna",    
    price: 699,
    productImage: "uploads/tuna.jpeg",
  },

  //FRUITES
      {
    id: "10",
    name: "Apple",    
    price: 699,
    productImage: "uploads/apple.jpeg",
  },
        {
    id: "11",
    name: "Orange",    
    price: 699,
    productImage: "uploads/orange.jpeg",
  },
      {
    id: "12",
    name: "Banana",    
    price: 699,
    productImage: "uploads/banana.jpeg",
  },
      {
    id: "13",
    name: "Strawberry",    
    price: 699,
    productImage: "uploads/strawberry.jpg",
  },
  {
    id: "14",
    name: "Mango",    
    price: 699,
    productImage: "uploads/mango.jpg",
  },
  {
    id: "15",
    name: "Watermelon",    
    price: 699,
    productImage: "uploads/Watermelon.jpg",
  },
  {
    id: "16",
    name: "Kiwi",    
    price: 699,
    productImage: "uploads/kiwi.webp",
  },
  {
    id: "17",
    name: "Grape",    
    price: 699,
    productImage: "uploads/grape.jpg",
  },
  {
    id: "18",
    name: "Pineapple",    
    price: 699,
    productImage: "uploads/Pineapple.jpg",
  },
  {
    id: "19",
    name: "Pear",    
    price: 699,
    productImage: "uploads/Pear.jpg",
  },
    {
    id: "20",
    name: "Lemon",    
    price: 699,
    productImage: "uploads/Lemon.webp",
  },
    {
    id: "21",
    name: "Cherry",    
    price: 699,
    productImage: "uploads/Cherry.jpeg",
  },
  {
    id: "22",
    name: "Pomegranate",    
    price: 699,
    productImage: "uploads/Pomegranate.jpeg",
  },
    {
    id: "23",
    name: "Plum",    
    price: 699,
    productImage: "uploads/Plum.jpg",
  },
    {
    id: "24",
    name: "Blackberry",    
    price: 699,
    productImage: "uploads/Blackberry.jpg",
  },
    {
    id: "25",
    name: "Apricot",    
    price: 699,
    productImage: "uploads/Apricot.jpg",
  },
    {
    id: "26",
    name: "Grapefruit",    
    price: 699,
    productImage: "uploads/Grapefruit.jpeg",
  },
    {
    id: "27",
    name: "Avacado",    
    price: 699,
    productImage: "uploads/Avacado.jpg",
  },
    {
    id: "28",
    name: "Blueberry",    
    price: 699,
    productImage: "uploads/Blueberry.jpg",
  },
    {
    id: "29",
    name: "Raspberry",    
    price: 699,
    productImage: "uploads/Raspberry.webp",
  },
    {
    id: "30",
    name: "Figs",    
    price: 699,
    productImage: "uploads/Figs.jpeg",
  },


  //VEGETABLES

    {
    id: "31",
    name: "Tomato",    
    price: 699,
    productImage: "uploads/tomato.jpg",
  },
    {
    id: "32",
    name: "Cucumber",    
    price: 699,
    productImage: "uploads/cucumber.jpg",
  },
    {
    id: "33",
    name: "Brocсoli",    
    price: 699,
    productImage: "uploads/broccoli.jpeg",
  },
    {
    id: "34",
    name: "Potato",    
    price: 699,
    productImage: "uploads/potato.jpeg",
  },
    {
    id: "35",
    name: "Carrot",    
    price: 699,
    productImage: "uploads/carrot.jpeg",
  },
    {
    id: "36",
    name: "Mushroom",    
    price: 699,
    productImage: "uploads/mushroom.jpeg",
  },
    {
    id: "37",
    name: "Cabbage",    
    price: 699,
    productImage: "uploads/cabbage.jpeg",
  },
  
    {
    id: "38",
    name: "Garlic",    
    price: 699,
    productImage: "uploads/garlic.jpeg",
  },
      {
    id: "39",
    name: "Cauliflower",    
    price: 699,
    productImage: "uploads/Cauliflower.jpeg",
  },
      {
    id: "40",
    name: "Pumpkin",    
    price: 699,
    productImage: "uploads/Pumpkin.jpeg",
  },
      {
    id: "41",
    name: "Spinach",    
    price: 699,
    productImage: "uploads/Spinach.jpeg",
  },
      {
    id: "42",
    name: "Zucchini",    
    price: 699,
    productImage: "uploads/zucchini.jpeg",
  },
      {
    id: "43",
    name: "Radish",    
    price: 699,
    productImage: "uploads/Radish.jpeg",
  },
      {
    id: "44",
    name: "Turnip",    
    price: 699,
    productImage: "uploads/Turnip.jpeg",
  },
      {
    id: "45",
    name: "Garlic",    
    price: 699,
    productImage: "uploads/garlic.jpeg",
  },


  //grains
    {
    id: "46",
    name: "Corn",    
    price: 699,
    productImage: "uploads/corn.webp",
  },
      {
    id: "47",
    name: "Wheat",    
    price: 699,
    productImage: "uploads/wheat.jpeg",
  },
      {
    id: "48",
    name: "Rice",    
    price: 699,
    productImage: "uploads/rice.jpg",
  },
      {
    id: "49",
    name: "Oat",    
    price: 699,
    productImage: "uploads/oats.jpg",
  },
      {
    id: "50",
    name: "Barley",    
    price: 699,
    productImage: "uploads/barley.jpg",
  },
      {
    id: "51",
    name: "Bulgur",    
    price: 699,
    productImage: "uploads/bulgur.webp",
  },

  //herbs
    {
    id: "52",
    name: "Basil",    
    price: 699,
    productImage: "uploads/basil.jpeg",
  },
      {
    id: "53",
    name: "Mint",    
    price: 699,
    productImage: "uploads/mint.jpeg",
  },
      {
    id: "54",
    name: "Angelica",    
    price: 699,
    productImage: "uploads/angelica.jpg",
  },
      {
    id: "55",
    name: "Bay Leaf",    
    price: 699,
    productImage: "uploads/bay_leaf.jpeg",
  },

//spices
   {
    id: "56",
    name: "Solt",    
    price: 699,
    productImage: "uploads/solt.jpg",
  },
     {
    id: "57",
    name: "Turmeric",    
    price: 699,
    productImage: "uploads/turmeric.jpg",
  },
     {
    id: "58",
    name: "Black Pepper",    
    price: 699,
    productImage: "uploads/black_pepper.png",
  },
     {
    id: "59",
    name: "Red Pepper",    
    price: 699,
    productImage: "uploads/red_pepper.jpeg",
  },
     {
    id: "60",
    name: "Garlic Powder",    
    price: 699,
    productImage: "uploads/garlic_powder.jpeg",
  },
     {
    id: "61",
    name: "Thyme",    
    price: 699,
    productImage: "uploads/thyme.jpg",
  },
     {
    id: "62",
    name: "Curry Powder",    
    price: 699,
    productImage: "uploads/curry_powder.jpg",
  },
     {
    id: "63",
    name: " Ground Mustard",    
    price: 699,
    productImage: "uploads/ground_mustard.jpeg",
  },
     {
    id: "64",
    name: "Cloves",    
    price: 699,
    productImage: "uploads/cloves.jpeg",
  },
     {
    id: "65",
    name: "Cinnamon",    
    price: 699,
    productImage: "uploads/cinnamon.jpg",
  },
     {
    id: "66",
    name: "Ground Ginger",    
    price: 699,
    productImage: "uploads/ground_ginger.jpeg",
  },
//diary products
     {
    id: "67",
    name: "Milk",    
    price: 699,
    productImage: "uploads/milk.jpg",
  },
     {
    id: "68",
    name: "Yogurt",    
    price: 699,
    productImage: "uploads/yogurt.jpg",
  },
     {
    id: "69",
    name: "Butter",    
    price: 699,
    productImage: "uploads/butter.jpeg",
  },
     {
    id: "70",
    name: "Cheese",    
    price: 699,
    productImage: "uploads/cheese.jpeg",
  },
     {
    id: "71",
    name: "Cottage Cheese",    
    price: 699,
    productImage: "uploads/cottage_cheese.jpg",
  },

     {
    id: "72",
    name: "Kefir",    
    price: 699,
    productImage: "uploads/kefir.jpeg",
  },
     {
    id: "73",
    name: "Cream Cheese",    
    price: 699,
    productImage: "uploads/cream_cheese.jpeg",
  },
  //oils
     {
    id: "74",
    name: "Corn Oil",    
    price: 699,
    productImage: "uploads/corn_oil.jpeg",
  },
   {
    id: "75",
    name: "Coconut Oil",    
    price: 699,
    productImage: "uploads/coconut_oil.jpeg",
  },
     {
    id: "76",
    name: "Olive Oil",    
    price: 699,
    productImage: "uploads/olive_oil.jpeg",
  },
     {
    id: "77",
    name: "Palm Oil",    
    price: 699,
    productImage: "uploads/palm_oil.jpeg",
  },
     {
    id: "78",
    name: "Safflower Oil",    
    price: 699,
    productImage: "uploads/safflower_oil.jpeg",
  },
     {
    id: "79",
    name: "Sunflower Oil",    
    price: 699,
    productImage: "uploads/sunflower_oil.jpeg",
  },
     {
    id: "80",
    name: "Cottonseed Oil",    
    price: 699,
    productImage: "uploads/cottonseed_oil.jpeg",
  },
  //drinks
     {
    id: "81",
    name: "Water",    
    price: 699,
    productImage: "uploads/water.jpeg",
  },
     {
    id: "82",
    name: "Pineapple Juice",    
    price: 699,
    productImage: "uploads/pineapple_juice.jpeg",
  },
     {
    id: "83",
    name: "Orange Juice",    
    price: 699,
    productImage: "uploads/orange_juice.jpeg",
  },
     {
    id: "84",
    name: "Pomegranate Juice",    
    price: 699,
    productImage: "uploads/Pomegranate_juice.jpeg",
  },
     {
    id: "85",
    name: "Apple Juice",    
    price: 699,
    productImage: "uploads/apple_juice.jpeg",
  },
     {
    id: "86",
    name: "Whiskey",    
    price: 699,
    productImage: "uploads/whiskey.webp",
  },
     {
    id: "87",
    name: "Wine",    
    price: 699,
    productImage: "uploads/wine.jpeg",
  },
     {
    id: "88",
    name: "Beer",    
    price: 699,
    productImage: "uploads/beer.jpeg",
  },
     {
    id: "89",
    name: "Vodka",    
    price: 699,
    productImage: "uploads/vodka.jpeg",
  },
     {
    id: "90",
    name: "Tequila",    
    price: 699,
    productImage: "uploads/tequila.jpeg",
  },
     {
    id: "91",
    name: "Champagne",    
    price: 699,
    productImage: "uploads/champagne.jpeg",
  },
    
];


app.get("/api/products", (req, res) => {
  res.send(products);
});

/***********************************************************/
/********* GET: SINGLE PRODUCT **********/
/***********************************************************/

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  res.send(product);
});

/***********************************************************/
/********* POST: ADD PRODUCT **********/
/***********************************************************/

app.post("/api/products", upload.single("productImage"), (req, res) => {
  //validate product
  const { error } = validateProduct({
    ...req.body,
    productImage: req.file?.path,
  });

  if (error) return res.status(400).send(error);

  const product = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.path,
  };

  products.push(product);
  res.send(product);
});

/***********************************************************/
/********* PUT: UPDATE PRODUCT **********/
/***********************************************************/

app.put("/api/products/:id", upload.single("productImage"), (req, res) => {
  //Find product
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }

  const { error } = validateUpdateProduct({
    ...req.body,
  });

  if (error) return res.status(400).send(error);

  product.name = req.body.name;
  product.price = req.body.price;
  if (req.file) {
    product.productImage = req.file.path;
  }

  res.send(product);
});

/***********************************************************/
/********* DELETE: DELETE PRODUCT **********/
/***********************************************************/

app.delete("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  const index = products.indexOf(product);
  products.splice(index, 1);

  res.send(products);
});

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().required(),
    productImage: Joi.string().required(),
  });

  return schema.validate(product);
}

function validateUpdateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().required(),
    productImage: Joi.string(),
  });

  return schema.validate(product);
}

/********* PORT **********/
//To set PORT run set/export PORT=YOUR_VALUE
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
