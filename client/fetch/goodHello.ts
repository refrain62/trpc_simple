import { fetchAction } from "../fetchAction";

const url = "http://localhost:8000/auth?name=taro&townName=tokyo";
const method = "Get";
const responseMessage = "hello:";
const header = { Authorization: "Good" };

fetchAction({ url, method, responseMessage, header })
