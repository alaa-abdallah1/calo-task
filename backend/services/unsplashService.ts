import axios from "axios";

export const unsplashClient = () => {
  const accessKey = process.env.ACCESS_KEY;

  return axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });
};

export default unsplashClient();
