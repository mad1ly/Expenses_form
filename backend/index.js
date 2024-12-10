import express from "express";
import formRoutes from "./routes/form.route.js" 

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use(express.json());
express.urlencoded({ extended: true });

// API routes
app.use("/api", formRoutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
