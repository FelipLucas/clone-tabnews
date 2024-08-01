test("GET to /api/v1/status should return 200", async () =>{
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.uptaded_at).toBeDefined();

  const parsedUptadedAt = new Date(responseBody.uptaded_at).toISOString();
  expect(responseBody.uptaded_at).toEqual(parsedUptadedAt);

  expect(responseBody.dependencies.version).toEqual("16.0");
});