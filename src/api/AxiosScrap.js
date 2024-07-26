import Axios from "./Axios";

export const AxiosScrapGet = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await Axios.get(`/api/v1/board/scrap`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};
