import React, { useEffect } from "react";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";
const Redirection = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");
  const navigate = useNavigate();
  console.log(code);
  useEffect(() => {
    if (code) {
      Axios.post(`/api/v1/auth/login/kakao?code=${code}`)
        .then((r) => {
          console.log(r.data);
          localStorage.setItem("name", r.data.user_name);
          navigate("/loginSuccess");
        })
        .catch((error) => {
          console.error("Error during login request:", error);
        });
    } else {
      console.error("No code found in URL");
    }
  }, [code, navigate]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
