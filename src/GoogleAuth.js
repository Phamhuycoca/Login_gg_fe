import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";

const clientId = "283760467044-um8m68fidg98esdnu5p8njn0s4uiitkg.apps.googleusercontent.com";

const GoogleAuth = () => {
  const handleSuccess = async (response) => {
    try {
      const { credential } = response;
      const { data } = await axios.post("http://localhost:2407/api/auth/google", { token: credential });
      console.log("Server Response:", data);
      alert("Đăng nhập thành công!");
    } catch (error) {
      console.error("Lỗi khi gửi token đến server:", error);
    }
  };

  const handleFailure = () => {
    console.log("Đăng nhập thất bại");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;