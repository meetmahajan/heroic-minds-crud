import { createPool } from "mysql2";

const proxyPool = createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  waitForConnections: true,
  connectionLimit: 10,
});
const proxyConnectionPool = proxyPool.promise();

async function getProxyNodeConnection() {
  const connection = await proxyConnectionPool.getConnection();
  await connection.changeUser({
    database: "meetmahajan",
  });
  return connection;
}

export default getProxyNodeConnection;
