import express from "express";

const port = 3000;
const app = express();

app.use("/", express.static("client/public/"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.json([{ name: "הדר" }, { name: "דניאל" }, { name: "יואל" }]);
});

app.get("/meals", (req, res) => {
  res.json([
    {
      title: "meals.breakfast.title",
      dish: {
        title: "dishes.main.title",
        options: [
          { name: "pita", label: "dishes.options.pita" },
          { name: "roll", label: "dishes.options.bread-roll" },
        ],
      },
    },
    {
      title: "meals.lunch.title",
      dish: {
        title: "dishes.main.title",
        options: [
          { name: "hotdog", label: "dishes.options.hotdog" },
          { name: "burger", label: "dishes.options.burger" },
        ],
      },
    },
  ]);
});

const meals = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
