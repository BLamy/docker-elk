import express from "express";
import morgan from "morgan";
import logger from "./logger.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(morgan("combined", { stream: logger.stream }));
app.use(express.static("public"));

app.get("/", (req, res) =>{
  logger.stream.write(JSON.stringify({ foo: "bar" }));
  res.status(200).json({ success: true, data: "Hello world!" })
});

app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`);
});

export default app;