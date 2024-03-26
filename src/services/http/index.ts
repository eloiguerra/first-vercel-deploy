import axios from "axios";

import { ENVIRONMENT } from "@/environment";

const http = axios.create({
  baseURL: ENVIRONMENT.API_BASE_URL,
});

export default http;
