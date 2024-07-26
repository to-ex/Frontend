import Axios from "./Axios";

export const AxiosMyPostsGet = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await Axios.get(`/api/v1/board/mypost`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};

export const AxiosPostDelete = async (scheduleId) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await Axios.delete(`/api/v1/board/${scheduleId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};

export const AxiosHeartPost = async (boardId) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await Axios.post(
      `/api/v1/like/${boardId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    console.log(error.response?.data?.detail || error.message);
    throw error;
  }
};

export const AxiosScrapPost = async (boardId) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await Axios.post(
      `/api/v1/scrap/${boardId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    console.log(error.response?.data?.detail || error.message);
    throw error;
  }
};
