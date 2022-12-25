import axios from "axios";

const buildClient = ({ req }) => {
  console.log(process.env);
  if (!process.env.BASE_URL) {
    throw new Error('BASE_URL must be defined');
  }
  if (typeof window === "undefined") {
    // We are on the server. 
    return axios.create({
      baseURL:
        process.env.BASE_URL,
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
}

export default buildClient;