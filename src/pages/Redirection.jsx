import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Redirection = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");
  const navigate = useNavigate();
  console.log(code);
  useEffect(() => {
    const response = axios
      .post(`${process.env.REACT_APP_URL}/api/v1/auth/login/kakao?code=${code}`)
      .then((r) => {
        console.log(r.data);

        // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
        localStorage.setItem("name", r.data.user_name); // 일단 이름만 저장했다.

        navigate("/loginSuccess");
      });
    console.log(response);
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
