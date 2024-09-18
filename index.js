import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const currentDate = new Date();
  console.log("La fecha actual: ", currentDate);
  res
    .status(200)
    .json({ message: "Hello World", currentDate, envVars: process.env });
});

app.get("/health", (req, res) => {
  try {
    throw new Error("Error de prueba");
  } catch (error) {
    console.log("Error: ", error);
  }
  res.status(200).json({ message: "Health check" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
