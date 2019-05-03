const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  const products = [
    {
      id: 1,
      description: "Black Shoes",
      longDescription: "The best shoes ever ever ever! Come and get one!!!!!",
      image: "black-shoes.jpg"
    },
    {
      id: 2,
      description: "Funny T-Shirt",
      longDescription:
        "Our T-Shirt made from good meterials with a great and funny faces painting",
      image: "tshirt.jpg"
    },
    {
      id: 3,
      description: "Funny T-Shirt",
      longDescription:
        "Our T-Shirt made from good meterials with a great and funny faces painting",
      image: "tshirt.jpg"
    },
    {
      id: 4,
      description: "Funny T-Shirt",
      longDescription:
        "Our T-Shirt made from good meterials with a great and funny faces painting",
      image: "tshirt.jpg"
    }
  ];
  res.send(products);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
