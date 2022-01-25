import axios from "axios";
const url = process.env.REACT_APP_URL;
console.log(url);
const RegisterPatient = async (data) => {
  let config = {
    method: "POST",
    url: `${url}/registerPatient`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    json: true,
  };
  // console.log(config);
  try {
    return axios(config)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.log(error);
  }
};

export { RegisterPatient };
