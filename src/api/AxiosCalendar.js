// 전체 조회 get

import Axios from "./Axios";

export const AxiosCalendarGet = async () => {
  try {
    const userId = 2;
    const token =
      "eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjEzLCJlbWFpbCI6Imh5b3JpZTAxMDNAZ21haWwuY29tIiwidHlwZSI6IkFjY2VzcyIsInN1YiI6Imh5b3JpZTAxMDNAZ21haWwuY29tIiwiZXhwIjoxNzIxOTA3MDA2fQ.0yGDsBbicAAvCx55vO-H81NyNmgq4ExbBMQ5dHl5bZLmgmpI_CVWlo7uLdaP4iv-JM8I73D-ohYxAclJlxLUIA";
    const response = await Axios.get(`/api/v1/schedule?userId=${userId}`, {
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
    const token =
      "eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjEzLCJlbWFpbCI6Imh5b3JpZTAxMDNAZ21haWwuY29tIiwidHlwZSI6IkFjY2VzcyIsInN1YiI6Imh5b3JpZTAxMDNAZ21haWwuY29tIiwiZXhwIjoxNzIxOTA3MDA2fQ.0yGDsBbicAAvCx55vO-H81NyNmgq4ExbBMQ5dHl5bZLmgmpI_CVWlo7uLdaP4iv-JM8I73D-ohYxAclJlxLUIA";
    const response = await Axios.delete(`/api/v1/schedule/${scheduleId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};

export const AxiosCalendarUpdate = async (scheduleId) => {
  try {
    const token =
      "eyJ0eXBlIjoiQWNjZXNzIiwiYWxnIjoiSFM1MTIifQ.eyJ1c2VySWQiOjEzLCJlbWFpbCI6Imh5b3JpZTAxMDNAZ21haWwuY29tIiwidHlwZSI6IkFjY2VzcyIsInN1YiI6Imh5b3JpZTAxMDNAZ21haWwuY29tIiwiZXhwIjoxNzIxOTA3MDA2fQ.0yGDsBbicAAvCx55vO-H81NyNmgq4ExbBMQ5dHl5bZLmgmpI_CVWlo7uLdaP4iv-JM8I73D-ohYxAclJlxLUIA";
    const response = await Axios.patch(`/api/v1/schedule/${scheduleId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.response.data.detail);
    throw error;
  }
};
