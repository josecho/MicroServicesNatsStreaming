import axios from "axios";

const buildClient = ({ req }) => {
  console.log(process.env.NODE_ENV);
  let baseUrl = "http://www.jlvbcoop-formacion-dev.xyz";
  if (process.env.NODE_ENV === 'production') {
    baseUrl = "https://www.jlvbcoop-formacion.xyz"
  };

  if (typeof window === "undefined") {
    // We are on the server. Pending to switch beteen DEV and PRO and change URL
    return axios.create({
      baseURL: baseUrl,
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