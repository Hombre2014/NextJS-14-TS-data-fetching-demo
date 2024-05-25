const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");

server.use(middlewares);
server.use((req, res, next) => {
  console.log("Request received");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(router);
server.listen(3003, () => {
  console.log("JSON Server is running");
});
