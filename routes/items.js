const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(itemData);
});

router.post("/", (req, res) => {
  const item = req.body;
  itemData.push({ ...item, id: v4() });
  res.send(`Item "${item.name}" has been added successfully.`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const itemFound = itemData.find((item) => item.id === id);
  console.log(itemFound);
  res.send(itemFound);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  itemData = itemData.filter((item) => item.id !== id);
  console.log(itemData);
  res.send(`Item with id ${id} has been deleted successfully.`);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, toppings, price } = req.body;

  const item = itemData.find((item) => item.id === id);

  if (name) item.name = name;
  if (toppings) item.toppings = toppings;
  if (price) item.price = price;

  res.send(
    `Item with id ${id} and name ${item.name} has been updated successfully`
  );
});

module.exports = router;