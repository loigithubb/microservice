require("dotenv").config(); // luôn gọi đầu tiên

const express = require("express");
const app = express();
const routes = require("./routes/index");
const helmet = require("helmet");

app.use(express.json());
app.use(routes); // đăng ký proxy routes

// ✅ Cấu hình helmet chính xác
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
      },
    },
  })
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 API Gateway is running at http://localhost:${PORT}`);
});
