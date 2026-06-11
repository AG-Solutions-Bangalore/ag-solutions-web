import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ag-solutions.in/webapi/public/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
