import axios from "axios";

const buildClient = ({ req }) => {
  console.log(process.env);
  let BASE_URL = 'https://www.jlvbcoop-formacion-dev.xyz'
  if (process.env.NODE_ENV === 'production') {
    BASE_URL = 'https://www.jlvbcoop-formacion.xyz'
  }
  if (typeof window === "undefined") {
    // We are on the server. 
    return axios.create({
      baseURL:
        BASE_URL,
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