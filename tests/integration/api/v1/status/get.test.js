test("GET to /api/v1/status should return 200", async () =>{
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUptadedAt = new Date(responseBody.uptaded_at).toISOString();
  expect(responseBody.uptaded_at).toEqual(parsedUptadedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.databse.max_connections).toEqual("100");
});  console.log(databaseVersionResult);