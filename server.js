

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/status", (req, res) => {
  res.json({
    app: "ZERO LOVE",
    status: "online",
    owner: "MR. ZERO",
    mainManagement: "MC JAY",
    manager: "MR. PRIMO MANAGER OFFICIAL",
    agencyManagement: true,
    agentManagement: true
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ZERO LOVE server is running!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("❤️ ZERO LOVE SERVER IS RUNNING");
  console.log("Port: " + PORT);
});
