import Users from "../controllers/users.js";

class Router {
  constructor(app) {
    let user = new Users();
    app.get("/", (req, res) => {
      this.getBasePath(req, res);
    });
    app.get("/users", (req, res) => {
      user.getUsers(req, res);
    });
    app.post("/user", (req, res) => {
      user.createUser(req, res);
    });
    app.get("/user/:id", (req, res) => {
      user.getUser(req, res);
    });
    app.delete("/user/:id", (req, res) => {
      user.deleteUser(req, res);
    });
    app.put("/user/:id", (req, res) => {
      user.updateUser(req, res);
    });
  }
  async getBasePath(req, res) {
    res.send("Express is running");
  }
}

export default Router;
