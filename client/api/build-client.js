import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server. Pending to switch beteen DEV and PRO and change URL
    return axios.create({
      baseURL:
        "https://www.jlvbcoop-formacion.xyz",
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