import { v1 as uuid_v1 } from "uuid";
import mysqlConnection from "../database/database_configuration.js";

class Users {
  async getUsers(req, res) {
    let connection = await mysqlConnection();
    const [result] = await connection.query(`SELECT * FROM user`);
    if (connection) {
      connection.release();
      connection = null;
    }
    res.send(result);
  }

  async createUser(req, res) {
    let connection = await mysqlConnection();
    let id = uuid_v1();
    let user = req.body;
    await connection.query(
      `INSERT INTO \`user\` (\`id\`,\`name\`,\`email\`,\`contact\`) VALUES ('${id}','${user.name}','${user.email}','${user.contact}')`
    );
    if (connection) {
      connection.release();
      connection = null;
    }
    res.send("User Created Successfully");
  }

  async getUser(req, res) {
    let connection = await mysqlConnection();
    let id = req.params.id;
    const [result] = await connection.query(
      `SELECT * FROM user where id='${id}'`
    );
    if (connection) {
      connection.release();
      connection = null;
    }
    res.send(result);
  }

  async deleteUser(req, res) {
    let connection = await mysqlConnection();
    let id = req.params.id;
    await connection.query(`DELETE FROM user where id='${id}'`);
    if (connection) {
      connection.release();
      connection = null;
    }
    res.send("User Deleted Successfully");
  }

  async updateUser(req, res) {
    let connection = await mysqlConnection();
    let id = req.params.id;
    let user = req.body;
    await connection.query(
      `UPDATE user SET name='${user.name}', contact='${user.contact}', email='${user.email}' where id='${id}'`
    );
    if (connection) {
      connection.release();
      connection = null;
    }
    res.send("User Updated Successfully");
  }
}

export default Users;
