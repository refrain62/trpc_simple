import { fetchAction } from "../fetchAction";

const url = "http://localhost:8000/user.userList";
const method = "Get";
const responseMessage = "Users:";

fetchAction({ url, method, responseMessage })
