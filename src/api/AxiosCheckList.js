import Axios from "./Axios";

export const AxiosCheckListGet = async () => {
  try {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("accessToken");
    const response = await Axios.get(`/api/v1/schedule?userId=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};

export const AxiosCheckListDone = async (scheduleId) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await Axios.patch(
      `/api/v1/schedule/done/${scheduleId}`, // URL 수정
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
