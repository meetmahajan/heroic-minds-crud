//CREATE TABLE `meetmahajan`.`user` (`id` VARCHAR(500) NOT NULL,`name` VARCHAR(100) NOT NULL,`email` VARCHAR(100) NOT NULL,`contact` VARCHAR(100) NOT NULL,PRIMARY KEY (`id`),UNIQUE INDEX `contact_UNIQUE` (`contact` ASC) VISIBLE);
import bodyParser from "body-parser";
import cors from "cors";
import getProxyNodeConnection from "./database/database_configuration.js";

class App {
  constructor(app) {
    this.app = app;
  }

  async setupMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    let connection = await getProxyNodeConnection();
    await connection.query(
      "CREATE TABLE if not exists `user` (`id` VARCHAR(500) NOT NULL,`name` VARCHAR(100) NOT NULL,`email` VARCHAR(100) NOT NULL,`contact` VARCHAR(100) NOT NULL,PRIMARY KEY (`id`),UNIQUE INDEX `contact_UNIQUE` (`contact` ASC) VISIBLE);"
    );
    connection.release();
    connection = null;
  }
}
export default App;
