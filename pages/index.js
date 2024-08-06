//import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils/index.js";
import database from "infra/database";
 
async function status(request, response){
  const uptadedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const  databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsValue = databaseOpenedConnectionsResult.rows[0].max_connections;

  const databaseOpenedConnectionsResult = await database.query(
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';"
  );

  const databaseOpenedConnectionsValue = 
  databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    uptaded_at: uptadedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      }
    }
  });
}

export default status;