import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils/index.js";
import database from "../../../../infra/database.js";
 
async function status(request, response){
  const result = await database.query("SELECT 1 + 1");
  console.log(result.rows)
  response.status(200).json({chave: "são acima da media"})
}
export default status;