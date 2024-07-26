import React, { useEffect } from "react";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";
const Redirection = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`/api/v1/auth/login/kakao?code=${code}`)
      .then((r) => {
        localStorage.setItem("accessToken", r.data.data.accessToken);
        localStorage.setItem("refreshToken", r.data.data.refreshToken);
        localStorage.setItem("name", r.data.data.name);
        localStorage.setItem("id", r.data.data.id);
        navigate("/loginSuccess");
      })
      .catch((error) => {
        console.error("Error response:", error.response);
      });
  }, [code, navigate]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
