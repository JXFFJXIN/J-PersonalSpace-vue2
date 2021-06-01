import request from "./request";

export async function getSetting() {
  const result =  await request.get("/api/setting");
  console.log(result);
  return result;
}
