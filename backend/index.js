import express from "express";
import cors from "cors";

// init app and attach cors
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// routes
app.get("/sutike", (req, res) => {
  console.log("yey, a call arrived!");

  const randomNumber = Math.floor(Math.random() * 1000);

  res.cookie("TOKEN", "abc" + randomNumber, {
    httpOnly: true,
    sameSite: "strict",
    expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
  });

  res.json({
    message:
      "Your cookie should be in browser now with this random number: " +
      randomNumber,
  });
});

// start app
const port = process.env.BACKEND_PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
