import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our Subscription tracker API");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

export default app;