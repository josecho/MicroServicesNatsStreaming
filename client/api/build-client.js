import axios from "axios";

const buildClient = ({ req }) => {
  console.log("debugeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrr");
  console.log(proprocess.env.NODE_ENV);
  let baseUrl = "http://www.jlvbcoop-formacion-dev.xyz";
  if (proprocess.env.NODE_ENV === 'production') {
    baseUrl = "https://www.jlvbcoop-formacion.xyz"
  };
  console.log(process.env.NODE_ENV);
  if (typeof window === "undefined") {
    // We are on the server. Pending to switch beteen DEV and PRO and change URL
    return axios.create({
      baseURL,
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