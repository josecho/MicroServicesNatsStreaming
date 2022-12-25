import axios from "axios";

const buildClient = ({ req }) => {
  console.log(process.env);
  console.log( "dddddddddddddddd");
  console.log(process.env.NODE_ENV);
  if (typeof window === "undefined") {
    // We are on the server. Pending to switch beteen DEV and PRO and change URL
    return axios.create({
      baseURL:
        "https://www.jlvbcoop-formacion-dev.xyz",
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