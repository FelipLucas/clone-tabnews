//import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils/index.js";
import database from "infra/database";
 
async function status(request, response){
  const uptadedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const  dataBaseVersionValue = databaseVersionResult.rows[0].server_version;
  response.status(200).json({
    uptaded_at: uptadedAt,
    dependencies: {
      database: {
        version: dataBaseVersionValue,
      }
    }
  });
}

export default status;