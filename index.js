const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const http = require("http");
const { Server } = require("socket.io");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hackatchon-3 API",
      version: "1.0.0",
      description: "Документация к запросам на бэкенде",
    },
    servers: [{ url: `http://localhost:${process.env.PORT}` }],
  },
  apis: ["./swagger/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get("/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/images", express.static("images"));

app.use(require("./routes/user.route"));
app.use(require("./routes/institute.route"));
app.use(require("./routes/review.route"));
app.use(require("./routes/universityNews.route"));
app.use(require("./routes/dormitore.route"));
app.use(require("./routes/university.route"));
app.use(require("./routes/task.route"));

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("mongoose connect"))
  .catch(() => console.log("mongoose warning"));

//Chat
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Сервер запущен на порте ${process.env.PORT}`);
});
