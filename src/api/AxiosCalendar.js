// 전체 조회 get

import Axios from "./Axios";

export const AxiosCalendar = async () => {
  try {
    const userId = 2;
    const token =
      "eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjIsImVtYWlsIjoiaHlvcmllMDEwM0BnbWFpbC5jb20iLCJ0eXBlIjoiQWNjZXNzIiwic3ViIjoiaHlvcmllMDEwM0BnbWFpbC5jb20iLCJleHAiOjE3MjE2MzYxOTN9.3QsEuf93Jr4Itmk2bLCooh96LfcokvdGAlslGhdG5yHWJYAMABuo_1eAYkhN4FqK9GFFGGgRFp7HmtFFrLHoKg";
    const response = await Axios.get(`/api/v1/schedule?userId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};
