import { fetchAction } from "../fetchAction";

const url = "http://localhost:8000/user.userCreate";
const method = "Post";
const responseMessage = "Created user:";
const queryData = {
  name: "taro",
  townName: "tokyo",
};

fetchAction({ url, method, responseMessage, queryData })
