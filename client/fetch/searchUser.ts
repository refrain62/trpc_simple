import { fetchAction } from "../fetchAction";

const url = 'http://localhost:8000/user.userById?input="1"';
const method = "Get";
const responseMessage = "User 1:";

fetchAction({ url, method, responseMessage })
