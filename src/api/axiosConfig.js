import axios from "axios";

export default axios.create({
  baseURL: "https://0a4d-193-226-5-166.ngrok-free.app", //baga ngrok http 8080 ca sa faci alt link
  headers: { "ngrok-skip-browser-warning": "true" },
});
