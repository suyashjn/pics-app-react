import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID PdbOPUu470fTR_Amq6qWgK1mOa5hRW8n5OCycXK6XEQ",
  },
});
