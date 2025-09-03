const express = require("express");
const app = express();

// route GET /
app.get("/tin-tuc", (req, res) => {
  res.send("Xin chào từ Express!");
});

// server lắng nghe tại cổng 3000
app.listen(3000, () => {
  var a = 1;
  var b = 2;

  var c = a + b;
  console.log("Server đang chạy tại http://localhost:3000");
});
