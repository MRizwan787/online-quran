import express from "express";
import signupRouter from "./routes/signup"; // Adjust the path if necessary
import contactRouter from "./routes/contact"; // Adjust the path if necessary

const app = express();
app.use(express.json());

// Use the routes
app.use("/api/signup", signupRouter);
app.use("/api/contact", contactRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
