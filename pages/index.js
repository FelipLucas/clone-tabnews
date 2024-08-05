//import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils/index.js";
import database from "infra/database";
 
async function status(request, response){
  const uptadedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const  dataBaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query("SHOW max_connections");
  const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;
  response.status(200).json({
    uptaded_at: uptadedAt,
    dependencies: {
      database: {
        version: dataBaseVersionValue,
        max_connections: databaseMaxConnectionsValue,
      }
    }
  });
}

export default status;