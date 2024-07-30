//import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils/index.js";
import database from "infra/database.js";
 
async function status(request, response){
  const uptadedAt = new Date().toISOString();

  response.status(200).json({
  });
}

export default status;