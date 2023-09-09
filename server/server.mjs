import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

async function startServer() {
  app.use(cors());
  app.use(express.json());

  app.use("/record", records);

  app.listen(PORT, () => {
    console.log(`Server is running at the backend ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Server startup error:", error);
});
