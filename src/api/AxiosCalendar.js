// 전체 조회 get

import Axios from "./Axios";

export const AxiosCalendarGet = async () => {
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

export const AxiosCalendarDelete = async (scheduleId) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await Axios.delete(`/api/v1/schedule/${scheduleId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};

export const AxiosCalendarUpdate = async (scheduleId, data) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await Axios.patch(`/api/v1/schedule/${scheduleId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};
